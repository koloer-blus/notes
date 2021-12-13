<template><h1 id="_1-引言" tabindex="-1"><a class="header-anchor" href="#_1-引言" aria-hidden="true">#</a> 1. 引言</h1>
<p>这篇文章介绍的优化技术叫 <a href="https://cs.chromium.org/chromium/src/v8/src/parsing/preparser.h?l=921&amp;rcl=e3b2feb3aade83c02e4bd2fa46965a69215cd821" target="_blank" rel="noopener noreferrer">preparser<OutboundLink/></a>，是通过跳过不必要函数编译的方式优化性能。</p>
<h1 id="_2-概述-精读" tabindex="-1"><a class="header-anchor" href="#_2-概述-精读" aria-hidden="true">#</a> 2. 概述 &amp; 精读</h1>
<p>解析 Js 发生在网页运行的关键路径上，因此加速对 JS 的解析，就可以加速网页运行效率。</p>
<p>然而并不是所有 Js 都需要在初始化时就被执行，因此也不需要在初始化时就解析所有的 Js！因为编译 Js 会带来三个成本问题：</p>
<ol>
<li>编译不必要的代码会占用 CPU 资源。</li>
<li>在 GC 前会占用不必要的内存空间。</li>
<li>编译后的代码会缓存在磁盘，占用磁盘空间。</li>
</ol>
<p>因此所有主流浏览器都实现了 Lazy Parsing（延迟解析），它会将不必要的函数进行预解析，也就是只解析出外部函数需要的内容，而全量解析在调用这个函数时才发生。</p>
<h2 id="预解析的挑战" tabindex="-1"><a class="header-anchor" href="#预解析的挑战" aria-hidden="true">#</a> 预解析的挑战</h2>
<p>本来预解析也不难，因为只要判断一个函数是否会立即执行就可以了，只有立即执行的函数才需要被完全解析。</p>
<p>使得预解析变复杂的是变量分配问题。原文通过了堆栈调用的例子说明原因：</p>
<p>Js 代码的执行在堆栈上完成，比如下面这个函数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// The return instruction pointer of `f` now points here</span>
  <span class="token comment">// (because when `f` `return`s, it returns here).</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这段函数的调用堆栈如下：</p>
<img width=200 src="https://img.alicdn.com/tfs/TB1gNCsRVYqK1RjSZLeXXbXppXa-173-333.svg">
<p>首先是全局 This <code>globalThis</code>，然后执行到函数 <code>f</code>，再对 <code>a</code> <code>b</code> 进行赋值。在执行 <code>f</code> 函数时，通过 <code>&lt;rip g&gt;</code>(return instruction pointer) 保存 g 堆栈状态，再保存堆栈跳出后返回位置的指针 <code>&lt;save fp&gt;</code>(frame pointer)，最后对变量 <code>c</code> 赋值。</p>
<p>这看上去没有问题，只要将值存在堆栈就搞定了。但是将变量定义到函数内部就不一样了：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">make_f</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ← declaration of `d`</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b <span class="token operator">+</span> d<span class="token punctuation">;</span> <span class="token comment">// ← reference to `d`</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token function">make_f</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>将变量 <code>d</code> 申明在函数 <code>make_f</code> 中，且在返回函数 <code>inner</code> 中用到了 <code>d</code>。那么函数的调用栈就变成了这样：</p>
<img width=500 src="https://img.alicdn.com/tfs/TB1HiuGR4YaK1RjSZFnXXa80pXa-428-292.svg">
<p>需要创建一个 <code>context</code> 存储函数 <code>f</code> 中变量 <code>d</code> 的值。</p>
<p>也就是说，如果一个在函数内部定义的变量被子 Scope 使用时，Js 引擎需要识别这种情况，并将这个变量值存储在 <code>context</code> 中。</p>
<p>所以对于函数定义的每一个入参，我们需要知道其是否会被子函数引用。<strong>也就是说，在 <code>preparser</code> 阶段，我们只要少能分析出哪些变量被内部函数引用了。</strong></p>
<h2 id="难以分辨的引用" tabindex="-1"><a class="header-anchor" href="#难以分辨的引用" aria-hidden="true">#</a> 难以分辨的引用</h2>
<p>预处理器中跟踪变量的申明与引用很复杂，因为 Js 的语法导致了无法从部分表达式推断含义，比如下面的函数：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> d <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们不清楚第三行的 <code>d</code> 到底是不是指代第一行的 <code>d</code>。它可能是：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> d <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> d<span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> g<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>也可能只是一个自定义函数参数，与上面的 <code>d</code> 无关：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> d <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> d<span class="token punctuation">;</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>d<span class="token punctuation">,</span> g<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="惰性-parse" tabindex="-1"><a class="header-anchor" href="#惰性-parse" aria-hidden="true">#</a> 惰性 parse</h2>
<p>在执行函数时，只会将最外层执行的函数完全编译并生成 AST，而对内部模块只进行 <code>preparser</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// This is the top-level scope.</span>
<span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// preparsed</span>
  <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// preparsed</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Fully parses and compiles `outer`, but not `inner`.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>为了允许惰性编译函数，上下文指针指向了 <a href="https://cs.chromium.org/chromium/src/v8/src/objects/scope-info.h?rcl=ce2242080787636827dd629ed5ee4e11a4368b9e&amp;l=36" target="_blank" rel="noopener noreferrer">ScopeInfo<OutboundLink/></a> 的对象（从代码中可以看到，ScopeInfo 包含上下文信息，比如当前上下文是否有函数名，是否在一个函数内等等），当编译内部函数时，可以利用 ScopeInfo 继续编译子函数。</p>
<p>但是为了判断惰性编译函数自身是否需要一个上下文，我们需要再次解析内部的函数：比如我们需要知道某个子函数是否对外层函数定义的变量有所引用。</p>
<p>这样就会产生递归遍历：</p>
<img width=800 src="https://img.alicdn.com/tfs/TB1uCOPR7voK1RjSZFwXXciCFXa-960-540.svg">
<p>由于代码总会包含一些嵌套，而编译工具更会产生 IIFE(立即调用函数) 这种多层嵌套的表达式，使得递归性能比较差。</p>
<p>而下面有一种办法可以将时间复杂度简化为线性：将变量分配的位置序列化为一个密集的数组，当惰性解析函数时，变量会按照原先的顺序重新创建，这样就不需要因为子函数可能引用外层定义变量的原因，对所有子函数进行递归惰性解析了。</p>
<p>按照这种方式优化后的时间复杂度是线性的：</p>
<img width=800 src="https://img.alicdn.com/tfs/TB1VS5LR7voK1RjSZFNXXcxMVXa-960-540.svg">
<h2 id="针对模块化打包的优化" tabindex="-1"><a class="header-anchor" href="#针对模块化打包的优化" aria-hidden="true">#</a> 针对模块化打包的优化</h2>
<p>由于现代代码几乎都是模块化编写的，构建起在打包时会将模块化代码封装在 IIFE（立即调用的闭包）中，以保证模拟模块化环境运行。比如 <code>(function(){....})()</code>。</p>
<p>这些代码看似在函数中应该惰性编译，但其实这些模块化代码从一开始就要被编译，否则反而会影响性能，因此 V8 有两种机制识别这些可能被立即调用的函数：</p>
<ol>
<li>如果函数是带括号的，比如 <code>(function(){...})</code>，就假设它会被立即调用。</li>
<li>从 V8 v5.7 / Chrome 57 开始，还会识别 uglifyJS 的 <code>!function(){...}(), function(){...}(), function(){...}()</code> 这种模式。</li>
</ol>
<p>然而在浏览器引擎解析环境比较复杂，很难对函数进行完整字符串匹配，因此只能对函数头进行简单判断。所以对于下面这种匿名函数的行为，浏览器是不识别的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// pre-parser</span>
<span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 在这执行它，进行 full parser</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面的代码看上去没毛病，但由于浏览器只检测被括号括住的函数，因此这个函数不被认为是立即执行函数，因此在后续执行时会被重复 full-parse。</p>
<p>也有一些代码辅助转换工具帮助 V8 正确识别，比如 <a href="https://github.com/nolanlawson/optimize-js" target="_blank" rel="noopener noreferrer">optimize-js<OutboundLink/></a>，会将代码做如下转换。</p>
<p>转换前：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">!</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">runIt</span><span class="token punctuation">(</span><span class="token parameter">fun</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token function">runIt</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>转换后：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">runIt</span><span class="token punctuation">(</span><span class="token parameter">fun</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token function">runIt</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>然而在 V8 v7.5+ 已经很大程度解决了这个问题，因此现在其实不需要使用 <a href="https://github.com/nolanlawson/optimize-js" target="_blank" rel="noopener noreferrer">optimize-js<OutboundLink/></a> 这种库了～</p>
<h1 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4. 总结</h1>
<p>JS 解析引擎在性能优化做了不少工作，但同时也要应对代码编译器产生的特殊 IIFE 闭包，防止对这种立即执行闭包进行重复 parser。</p>
<p>最后，不要试图总是将函数用括号括起来，因为这样会导致惰性编译的特性无法启用。</p>
<blockquote>
<p>原文：https://v8.dev/blog/preparser</p>
</blockquote>
<blockquote>
<p>版权声明：自由转载-非商用-非衍生-保持署名（<a href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh" target="_blank" rel="noopener noreferrer">创意共享 3.0 许可证<OutboundLink/></a>）</p>
</blockquote>
</template>

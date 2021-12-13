<template><h1 id="模块化标准现状" tabindex="-1"><a class="header-anchor" href="#模块化标准现状" aria-hidden="true">#</a> 模块化标准现状</h1>
<h2 id="_1-commonjs" tabindex="-1"><a class="header-anchor" href="#_1-commonjs" aria-hidden="true">#</a> 1. CommonJS</h2>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>var num = require('./util');
module.exports = {
  num: num,
  add: add
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>
<p>规范</p>
<ul>
<li>块的标识应遵循一定的书写规则。</li>
<li>定义全局函数 require(dependency)，通过传入模块标识来引入其他依赖模块，执行的结果即为别的模块暴漏出来的 API。</li>
<li>如果被 require 函数引入的模块中也包含外部依赖，则依次加载这些依赖。</li>
<li>如果引入模块失败，那么 require 函数应该抛出一个异常。</li>
<li>模块通过变量 exports 来向外暴露 API，exports 只能是一个 Object 对象，暴露的 API 须作为该对象的属性。</li>
</ul>
</li>
<li>
<p>优点</p>
<ul>
<li>简单易用。</li>
<li>解决了模块依赖的问题。</li>
<li>减少了全局变量污染。</li>
</ul>
</li>
<li>
<p>缺点</p>
<ul>
<li>无法在浏览器端使用。</li>
<li>无法非阻塞的并行加载多个模块。</li>
</ul>
</li>
</ul>
<h2 id="_2-amd-async-module-definition" tabindex="-1"><a class="header-anchor" href="#_2-amd-async-module-definition" aria-hidden="true">#</a> 2. AMD（Async Module Definition）</h2>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>define({
    method1: function() {},
    method2: function() {},
});

require(['foo', 'bar'], function ( foo, bar ) {
        foo.doSomething();
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>
<p>规范</p>
<ul>
<li>模块的标识遵循 CommonJS Module Identifiers。</li>
<li>定义全局函数 define(id, dependencies, factory)，用于定义模块。dependencies 为依赖的模块数组，在 factory 中需传入形参与之一一对应。</li>
<li>如果 dependencies 的值中有 require、exports 或 module，则与 CommonJS 中的实现保持一致。</li>
<li>如果 dependencies 省略不写，则默认为 ['require', 'exports', 'module']，factory 中也会默认传入三者。</li>
<li>如果 factory 为函数，模块可以通过以下三种方式对外暴漏 API：return 任意类型；exports.XModule = XModule、module.exports = XModule。</li>
<li>如果 factory 为对象，则该对象即为模块的导出值。</li>
</ul>
</li>
<li>
<p>优点</p>
<ul>
<li>可以用于浏览器。</li>
<li>异步加载模块。</li>
<li>可以并行加载多个模块。</li>
</ul>
</li>
<li>
<p>缺点</p>
<ul>
<li>提高了开发成本。</li>
<li>不能按需加载，而是提前加载所有的依赖。</li>
</ul>
</li>
</ul>
<h2 id="_3-cmd-common-module-definition" tabindex="-1"><a class="header-anchor" href="#_3-cmd-common-module-definition" aria-hidden="true">#</a> 3. CMD （Common Module Definition）</h2>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>define(function (require, exports, module) {
  var add = function (a, b) {
    return a + b;
  }
  exports.add = add;
});

seajs.use(['math.js'], function (math) {
  var sum = math.add(1, 2);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>
<p>优点</p>
<ul>
<li>实现了浏览器端的模块化加载。</li>
<li>可以按需加载。</li>
<li>依赖就近，延迟执行。</li>
</ul>
</li>
<li>
<p>缺点</p>
<ul>
<li>依赖 SPM 打包，模块加载逻辑偏重。</li>
</ul>
</li>
</ul>
<h2 id="_4-umd-universal-module-definition" tabindex="-1"><a class="header-anchor" href="#_4-umd-universal-module-definition" aria-hidden="true">#</a> 4. UMD （Universal Module Definition）</h2>
<p>UMD 是一种 JavaScript 通用模块定义规范，让你的模块能在 JavaScript 所有运行环境中发挥作用。</p>
<ul>
<li>规定如下
<ul>
<li>优先判断是否存在 exports 方法，如果存在，则采用 CommonJS 方式加载模块；</li>
<li>其次判断是否存在 define 方法，如果存在，则采用 AMD 方式加载模块；</li>
<li>最后判断 global 对象上是否定义了所需依赖，如果存在，则直接使用；反之，则抛出异常。</li>
</ul>
</li>
</ul>
<h2 id="_5-es-module" tabindex="-1"><a class="header-anchor" href="#_5-es-module" aria-hidden="true">#</a> 5. ES Module</h2>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>exportfunction hello() { };
exportdefault {
  // ...
};

import { readFile } from'fs';
import React from'react';
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>
<p>优点</p>
<ul>
<li>语法层面的支持，使用简单。</li>
</ul>
</li>
<li>
<p>缺点</p>
<ul>
<li>浏览器还没有完全兼容，必须通过工具转换成标准的 ES5 后才能正常运行。</li>
</ul>
</li>
</ul>
<p><img src="https://mmbiz.qpic.cn/mmbiz_jpg/xsw6Lt5pDCufQiaO49nBCxJicg5R3LIGTwV7JNiadJ4EUW8jJ6RFOJFIFNJtgP08GMrEhZ6hdZbujEf0umvrpztog/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt=""></p>
</template>

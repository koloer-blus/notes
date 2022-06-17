import{_ as t,r as c,o as l,c as r,a as e,e as a,F as p,d as o,b as n}from"./app.07af11fc.js";const i={},d=o(`<h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> UseEffect</h2><blockquote><p><em>Effect Hook</em> \u53EF\u4EE5\u8BA9\u4F60\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6267\u884C\u526F\u4F5C\u7528\u64CD\u4F5C</p><p><strong>\u63D0\u793A</strong>\uFF1A</p><p>\u5982\u679C\u4F60\u719F\u6089 React class \u7684\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\u628A <code>useEffect</code> Hook \u770B\u505A <code>componentDidMount</code>\uFF0C<code>componentDidUpdate</code> \u548C <code>componentWillUnmount</code> \u8FD9\u4E09\u4E2A\u51FD\u6570\u7684\u7EC4\u5408\u3002</p></blockquote><h3 id="\u6267\u884C\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u65F6\u673A" aria-hidden="true">#</a> \u6267\u884C\u65F6\u673A</h3><p><code>useEffect</code>\u5728\u6D4F\u89C8\u5668\u7684\u91CD\u56DE\u4E4B\u540E\u5F02\u6B65\u6267\u884C\u3002</p><blockquote><p>\u4E0E <code>componentDidMount</code>\u3001<code>componentDidUpdate</code> \u4E0D\u540C\u7684\u662F\uFF0C\u4F20\u7ED9 <code>useEffect</code> \u7684\u51FD\u6570\u4F1A\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\u5E03\u5C40\u4E0E\u7ED8\u5236<strong>\u4E4B\u540E</strong>\uFF0C\u5728\u4E00\u4E2A\u5EF6\u8FDF\u4E8B\u4EF6\u4E2D\u88AB\u8C03\u7528\u3002</p><p>\u7136\u800C\uFF0C\u5E76\u975E\u6240\u6709 effect \u90FD\u53EF\u4EE5\u88AB\u5EF6\u8FDF\u6267\u884C\u3002\u5BF9\u4E8E\u9700\u8981\u540C\u6B65\u6267\u884C\u7684<code>hooks</code>\u6211\u4EEC\u9700\u8981\u4F7F\u7528<code>useLayoutEffect</code>\u3002</p><p><code>Effect</code>\u4F1A\u4FDD\u8BC1\u5728\u4EFB\u4F55\u65B0\u7684\u6E32\u67D3\u524D\u6267\u884C\uFF0C\u5728\u5F00\u59CB\u6267\u884C\u65B0\u7684<code>Effect CallBack</code>\u524D\uFF0C\u603B\u4F1A\u6E05\u9664\u4E0A\u4E00\u8F6E\u6E32\u67D3\u7684<code>Effect</code>\u3002</p></blockquote><ol><li><p>\u9ED8\u8BA4\u60C5\u51B5\uFF0C\u5728\u7B2C\u4E00\u6B21\u6E32\u67D3\u4E4B\u540E<em>\u548C</em>\u6BCF\u6B21\u66F4\u65B0\u4E4B\u540E\u90FD\u4F1A\u6267\u884C</p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>const Effect: React.FC = () =&gt; {
  const [value, setValue] = React.useState(&#39;&#39;);
  React.useEffect(() =&gt; {
    document.title = value;
    console.log(&#39;value is &#39;, value);
  });
  return (
    &lt;div&gt;
      &lt;h2&gt;Effect&lt;/h2&gt;
      &lt;input
        value={value}
        onChange={(e) =&gt; setValue(e.target.value)}
        placeholder=&quot;document.title&quot; /&gt;
    &lt;/div&gt;
  );
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li><li><p>\u4EC5\u4EC5\u5728<code>Dom</code>\u7B2C\u4E00\u6B21\u6E32\u67D3\u548C\u6BCF\u6B21<code>value</code>\u53D8\u5316\u540E\u6267\u884C</p><div class="language-react ext-react"><pre class="language-react"><code>React.useEffect(() =&gt; {
    console.log(&#39;[dep value] value is &#39;, value);
  }, [value]);
</code></pre></div></li><li><p>\u4EC5\u4EC5\u5728<code>Dom</code>\u7B2C\u4E00\u6B21\u6E32\u67D3\u6267\u884C</p><div class="language-react ext-react"><pre class="language-react"><code>React.useEffect(() =&gt; {
    console.log(&#39;[first render] value is &#39;, value);
  }, []);
</code></pre></div></li></ol><h3 id="\u4F20\u5165\u4F9D\u8D56\u7684\u6BD4\u8F83\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u4F20\u5165\u4F9D\u8D56\u7684\u6BD4\u8F83\u89C4\u5219" aria-hidden="true">#</a> \u4F20\u5165\u4F9D\u8D56\u7684\u6BD4\u8F83\u89C4\u5219</h3><h3 id="object-is" tabindex="-1"><a class="header-anchor" href="#object-is" aria-hidden="true">#</a> <code>Object.is()</code></h3><blockquote><p>\u7528\u4E8E\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u4E3A\u540C\u4E00\u4E2A\u503C</p></blockquote><p>\u5982\u679C\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\u5219\u4E24\u4E2A\u503C\u76F8\u7B49\uFF1A</p>`,10),u=n("\u90FD\u662F "),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"undefined",-1),b=n("\u90FD\u662F "),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"null",-1),k=e("li",null,[n("\u90FD\u662F "),e("code",null,"true"),n(" \u6216 "),e("code",null,"false")],-1),g=e("li",null,"\u90FD\u662F\u76F8\u540C\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\u4E14\u76F8\u540C\u5B57\u7B26\u6309\u76F8\u540C\u987A\u5E8F\u6392\u5217",-1),v=e("li",null,"\u90FD\u662F\u76F8\u540C\u5BF9\u8C61\uFF08\u610F\u5473\u7740\u6BCF\u4E2A\u5BF9\u8C61\u6709\u540C\u4E00\u4E2A\u5F15\u7528\uFF09",-1),N=n("\u90FD\u662F\u6570\u5B57\u4E14 "),x=e("li",null,[n("\u90FD\u662F "),e("code",null,"+0")],-1),E=e("li",null,[n("\u90FD\u662F "),e("code",null,"-0")],-1),j=n("\u90FD\u662F "),R={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"NaN",-1),S=n("\u6216\u90FD\u662F\u975E\u96F6\u800C\u4E14\u975E "),y={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"NaN",-1),C=n(" \u4E14\u4E3A\u540C\u4E00\u4E2A\u503C"),U=n("\u4E0E"),W={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"==",-1),J=n(" (en-US)"),w=n(" \u8FD0\u7B97"),D=e("em",null,"\u4E0D\u540C\u3002",-1),G=n(),V=e("code",null,"==",-1),B=n(" \u8FD0\u7B97\u7B26\u5728\u5224\u65AD\u76F8\u7B49\u524D\u5BF9\u4E24\u8FB9\u7684\u53D8\u91CF(\u5982\u679C\u5B83\u4EEC\u4E0D\u662F\u540C\u4E00\u7C7B\u578B) \u8FDB\u884C\u5F3A\u5236\u8F6C\u6362 (\u8FD9\u79CD\u884C\u4E3A\u7684\u7ED3\u679C\u4F1A\u5C06 "),F=e("code",null,'"" == false',-1),L=n(" \u5224\u65AD\u4E3A "),H=e("code",null,"true",-1),I=n("), \u800C "),M=e("code",null,"Object.is",-1),T=n("\u4E0D\u4F1A\u5F3A\u5236\u8F6C\u6362\u4E24\u8FB9\u7684\u503C\u3002"),A=n("\u4E0E"),K={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"===",-1),Q=n(" (en-US)"),X=n(" \u8FD0\u7B97\u4E5F\u4E0D\u76F8\u540C\u3002 "),Y=e("code",null,"===",-1),Z=n(" \u8FD0\u7B97\u7B26 (\u4E5F\u5305\u62EC "),$=e("code",null,"==",-1),ee=n(" \u8FD0\u7B97\u7B26) \u5C06\u6570\u5B57 "),ne=e("code",null,"-0",-1),se=n(" \u548C "),ae=e("code",null,"+0",-1),oe=n(" \u89C6\u4E3A\u76F8\u7B49 \uFF0C\u800C\u5C06"),te={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN",target:"_blank",rel:"noopener noreferrer"},ce=e("code",null,"Number.NaN",-1),le=n(" \u4E0E"),re={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN",target:"_blank",rel:"noopener noreferrer"},pe=e("code",null,"NaN",-1),ie=n("\u89C6\u4E3A\u4E0D\u76F8\u7B49."),de=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// polyfill Object.is</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Object<span class="token punctuation">.</span>is<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function-variable function">is</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token number">1</span><span class="token operator">/</span>x <span class="token operator">===</span> <span class="token number">1</span><span class="token operator">/</span>y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> x <span class="token operator">!==</span> x <span class="token operator">&amp;&amp;</span> y <span class="token operator">!==</span> y<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,1);function ue(_e,he){const s=c("ExternalLinkIcon");return l(),r(p,null,[d,e("ul",null,[e("li",null,[u,e("a",_,[h,a(s)])]),e("li",null,[b,e("a",f,[m,a(s)])]),k,g,v,e("li",null,[N,e("ul",null,[x,E,e("li",null,[j,e("a",R,[z,a(s)])]),e("li",null,[S,e("a",y,[O,a(s)]),C])])])]),e("p",null,[U,e("a",W,[q,J,a(s)]),w,D,G,V,B,F,L,H,I,M,T]),e("p",null,[A,e("a",K,[P,Q,a(s)]),X,Y,Z,$,ee,ne,se,ae,oe,e("a",te,[ce,a(s)]),le,e("a",re,[pe,a(s)]),ie]),de],64)}var fe=t(i,[["render",ue],["__file","React-[hooks]--useEffect.html.vue"]]);export{fe as default};
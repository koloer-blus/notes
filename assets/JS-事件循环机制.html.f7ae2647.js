import{_ as p,r as o,o as c,c as i,a as n,b as e,F as l,d as t,e as a}from"./app.1f59b63a.js";const r={},u=t('<h1 id="\u6253\u901Ajs\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u6253\u901Ajs\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236" aria-hidden="true">#</a> \u6253\u901AJS\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236</h1><blockquote><p>\u5728\u4E86\u89E3\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u804A\u4E0B<code>javascript</code>\u7684\u8FD0\u884C\u673A\u5236\u4EE5\u53CA\u5BF9\u5E94\u7684\u539F\u56E0</p></blockquote><h2 id="\u4E3A\u4EC0\u4E48javascrip\u662F\u5355\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48javascrip\u662F\u5355\u7EBF\u7A0B" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48JavaScrip\u662F\u5355\u7EBF\u7A0B</h2><p>\u56E0\u4E3AJS\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u548C\u7528\u6237\u4E92\u52A8\uFF0C\u5728\u524D\u7AEF\u7684<code>javascript</code>\u64CD\u4F5C<code>dom</code>\u65F6\uFF0C\u5E76\u4E0D\u4F1A\u50CF\u540E\u7AEF\u4E00\u6837\u901A\u8FC7\u9501\u6216\u8005\u5176\u4ED6\u7684\u65B9\u5F0F\u6765\u4FDD\u8BC1\u8FD9\u79CD\u5F7C\u6B64\u5F71\u54CD\u7684\u64CD\u4F5C\u7684\u5148\u540E\u987A\u5E8F\uFF0C\u6240\u4EE5<strong>\u4E3A\u4E86\u907F\u514D\u590D\u6742\u6027\u548C\u786E\u4FDD\u5BF9\u4E8E<code>Dom</code>\u64CD\u4F5C\u7684\u552F\u4E00\u6027\uFF0C\u4F7F\u7528\u5355\u7EBF\u7A0B\u662F\u4E00\u4E2A\u5229\u5927\u4E8E\u5F0A\u7684\u65B9\u6848\u3002</strong></p><h3 id="\u90A3\u4E48web-worker\u5462-\u8FD9\u4E0D\u662F\u4E00\u79CD\u652F\u6301\u591A\u7EBF\u7A0B\u7684\u65B9\u6848\u5417" tabindex="-1"><a class="header-anchor" href="#\u90A3\u4E48web-worker\u5462-\u8FD9\u4E0D\u662F\u4E00\u79CD\u652F\u6301\u591A\u7EBF\u7A0B\u7684\u65B9\u6848\u5417" aria-hidden="true">#</a> \u90A3\u4E48web worker\u5462\uFF1F\u8FD9\u4E0D\u662F\u4E00\u79CD\u652F\u6301\u591A\u7EBF\u7A0B\u7684\u65B9\u6848\u5417\uFF1F</h3>',5),d=a("\u9996\u5148\u9700\u8981\u660E\u786E\u4E00\u70B9\uFF0C\u5728worker\u5185\uFF0C\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5CDOM\u8282\u70B9\uFF0C\u4E5F\u4E0D\u80FD\u4F7F\u7528"),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"window",-1),m=a("\u5BF9\u8C61\u7684\u9ED8\u8BA4\u65B9\u6CD5\u548C\u5C5E\u6027\u3002\u5E76\u4E14\u8FD9\u79CD\u65B9\u6848\u5141\u8BB8JavaScript\u811A\u672C\u521B\u5EFA\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u4F46\u662F\u5B50\u7EBF\u7A0B\u5B8C\u5168\u53D7\u4E3B\u7EBF\u7A0B\u63A7\u5236\u3002"),h=n("h2",{id:"eventloop-\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eventloop-\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236","aria-hidden":"true"},"#"),a(" EventLoop\uFF08\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF09")],-1),g=a("\u4E0B\u9762\u7684\u4EE3\u7801\u4EE5\u53CA\u5BF9\u5E94\u7684\u5C55\u793A\u90FD\u662F\u6765\u81EA\u4E8E\uFF1A "),f={href:"http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coMSk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7CiAgICBjb25zb2xlLmxvZygyKQp9LDIwMDApOwoKbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSl7CiAgICBjb25zb2xlLmxvZygzKTsKICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspewogICAgICAgIGkgPT0gMiAmJiByZXNvbHZlKCk7CiAgICB9Cn0pLnRoZW4oZnVuY3Rpb24oKXsKICAgIGNvbnNvbGUubG9nKDQpCn0pOwoKY29uc29sZS5sb2coNSk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D",target:"_blank",rel:"noopener noreferrer"},_=a("loupe \u4EE3\u7801\u8FD0\u884C\u53EF\u89C6\u5316\u73AF\u5883"),v=t(`<p>\u9996\u5148\uFF0CEventLoop\u5728\u6CA1\u6709\u4E8B\u60C5\u53EF\u5E72\u7684\u65F6\u5019\uFF0C\u4F1A\u4FDD\u6301\u4E00\u79CD\u7ECF\u6D4E\u7684\u65B9\u5F0F\u4E00\u76F4\u7A7A\u8F6C\u3002</p><p>\u9996\u5148\u6211\u4EEC\u5229\u7528(Philip Roberts\u6F14\u8BB2\u4E2D\u7684)\u56FE\u7247\u6765\u5C55\u793A\u6574\u4E2A\u6D4F\u89C8\u5668<code>EventLoop</code>\u7684\u8FC7\u7A0B\uFF1A <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b872cf45e8944b6f996222d33b85cc30~tplv-k3u1fbpfcp-zoom-1.image" alt=""> \u5728\u4E3B\u7EBF\u7A0B\u8FD0\u884C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u4E3B\u8981\u4F7F\u7528\u5230<code>V8</code>\u5F15\u64CE\u7684\u4E24\u4E2A\u7EC4\u4EF6\uFF0C\u4E5F\u5C31\u662F\u4E0A\u9762\u7684\u5185\u5B58\u5806(heap)\u548C\u8C03\u7528\u6808(stack)\uFF1A</p><ul><li>\u5185\u5B58\u5806\uFF1A\u8FD9\u662F\u5185\u5B58\u5206\u914D\u53D1\u751F\u7684\u5730\u65B9\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u53D8\u91CF\u7B49\u7B49\u8FD9\u4E9B\u4E1C\u897F\u5206\u914D\u7684\u5730\u65B9\uFF1B</li><li>\u8C03\u7528\u6808\uFF1A\u200A\u8FD9\u662F\u5728\u4F60\u4EE3\u7801\u6267\u884C\u65F6\u6808\u5E27\u5B58\u653E\u7684\u4F4D\u7F6E\uFF0C\u56E0\u4E3A\u662F\u6808\uFF0C\u6240\u4EE5\u5B83\u4E00\u6B21\u5236\u4F5C\u4E00\u4EF6\u4E8B\u3002\u66F4\u8BE6\u7EC6\u70B9\u8BF4\uFF0C\u8C03\u7528\u6808\u8BB0\u5F55\u7684\u5C31\u662F\u6211\u4EEC\u7684\u7A0B\u5E8F\u6240\u5904\u7684\u4F4D\u7F6E\u3002\u6808\u4E2D\u7684\u4EE3\u7801\u8C03\u7528\u5404\u79CD\u5916\u90E8API\u3002</li></ul><p>\u90A3\u4E48\u4E0A\u9762\u7684<code>callback queue</code>\u5462\uFF1F\u5176\u5B9E\u8FD9\u91CC\u5BF9\u5E94\u7684\u539F\u672C\u610F\u601D\u662F\u56DE\u8C03\u961F\u5217\uFF0C\u4F46\u662F\u6211\u4EEC\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\uFF0C\u901A\u5E38\u79F0\u5B83\u4E3A<strong>\u4EFB\u52A1\u961F\u5217</strong>\uFF0C\u5728\u8FD9\u91CC\u53BB\u6267\u884C\u6211\u4EEC\u7684\u5F02\u6B65\u4EFB\u52A1\u3002</p><h3 id="\u501F\u7528\u4EE3\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u501F\u7528\u4EE3\u7801\u5206\u6790" aria-hidden="true">#</a> \u501F\u7528\u4EE3\u7801\u5206\u6790</h3><p>\u6BD4\u5982\u6211\u6709\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u6211\u4EEC\u6765\u4E00\u70B9\u70B9\u5206\u6790\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u7684\u6574\u4F53\u8FD0\u884C\u8FC7\u7A0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        i <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u9996\u5148\u731C\u4E00\u731C\u4E0A\u9762\u4EE3\u7801\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF0C\u90A3\u4E48\u7ED3\u679C\u5C31\u5E94\u8BE5\u662F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>1 2 3 4 5
</code></pre></div><p>\u4F46\u662F\u8FD9\u6837\u7684\u8BDD\u5982\u679C\u6211\u4EEC\u7684\u5B9A\u65F6\u5668\u4E8B\u4EF6\u66F4\u957F\u4E00\u70B9\uFF0C\u90A3\u4E48\u662F\u4E0D\u662F\u610F\u5473\u7740\u6211\u4EEC\u7684Promise\u548C\u540E\u9762\u7684<code>console.log(5)</code>\u8FD9\u4E9B\u539F\u672C\u4E0D\u9700\u8981\u7B49\u5F85\u7684\u4E8B\u4EF6\u4E5F\u8981\u7B49\u5F85\u7740200ms\u5462\uFF1F\u8FD9\u6837\u7684\u8BDD\uFF0C\u5C31\u9020\u6210\u4E86\u52A0\u8F7D<code>javascript</code>\u5BFC\u81F4\u7684\u9875\u9762\u963B\u585E\u4E86\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u5728\u8FD9\u91CC\u9700\u8981\u5F15\u5165\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/647254a72c9242a38509e7803ebbf4d9~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u9996\u5148\u6267\u884C<code>console.log(1)</code>,\u5C06\u5176\u538B\u5165\u6267\u884C\u6808\u4E2D\uFF0C\u56E0\u4E3A\u4E0D\u5B58\u5728\u8C03\u7528<code>webApi</code>\u548C\u5F02\u6B65\u7684\u60C5\u51B5\uFF0C\u6240\u4EE5\u6211\u4EEC\u76F4\u63A5\u8F93\u51FA\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba317a18c03c4717904baf0c19aba49c~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u7136\u540E\u7EE7\u7EED\u5411\u4E0B\u6267\u884C\uFF0C\u6211\u4EEC\u5411\u6267\u884C\u6808\u4E2D\u538B\u5165\u5B9A\u65F6\u5668\u3002\u5B9A\u65F6\u5668\u4F5C\u4E3A\u4E00\u79CD\u5EF6\u671F\u6267\u884C\u6216\u8005\u5B9A\u5411\u6267\u884C\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u8FD9\u91CC\u7B49\u5F85\u7684\u8BDD\u4F1A\u5F71\u54CD\u5230\u6211\u4EEC\u7684\u4EE3\u7801\u6B63\u5E38\u6267\u884C\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06\u5B83\u653E\u5165\u4EFB\u52A1\u961F\u5217\u4E2D\uFF08\u4E0B\u56FE\u4E2D\u7684<code>anonymous()</code>\u4EE3\u8868\u5B9A\u65F6\u5668\uFF09\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f1ed5a6497d428e9dda5f61f957f12a~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u7D27\u63A5\u7740\u6211\u4EEC\u7EE7\u7EED\u6267\u884C\uFF0C\u6765\u5230<code>Promise</code>\u8FD9\u4E00\u90E8\u5206\uFF0C\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A\u53EA\u6709<code>Promise.then</code>\u5C5E\u4E8E\u5FAE\u4EFB\u52A1\uFF08\u5F02\u6B65\u4EFB\u52A1\uFF09\uFF0C<code>new Promise</code>\u672C\u8EAB\u56DE\u8C03\u51FD\u6570\u4E2D\u7684\u4EE3\u7801\u4F9D\u7136\u662F\u540C\u6B65\u6267\u884C\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/accce8fdfff64706b1a545647f990518~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u8FD9\u91CC\u6211\u4EEC\u5148\u6267\u884C<code>console.log(3)</code>,\u7136\u540E\u6211\u4EEC\u987A\u5E8F\u6267\u884C\u5FAA\u73AF\u4E2D\u7684\u4EE3\u7801\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b18b3e480d464609809edb9633c10ade~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u7136\u540E\u5FAA\u73AF\u8FC7\u7A0B\u4E2D\u5F53<code>i == 2</code>\u65F6\u6267\u884C<code>resolve()</code>\u51FD\u6570</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2381b5958e144517a7cb6e03f9ff5d66~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u7136\u540E<code>new Promise</code>\u7684\u90E8\u5206\u6267\u884C\u7ED3\u675F\u3002\u7136\u540E\u5C31\u6709\u597D\u591A\u540C\u5B66\u4EA7\u751F\u7591\u95EE\u4E86\uFF0C\u540E\u9762\u7684<code>.then</code>\u53BB\u54EA\u4E86\uFF0C\u5B9E\u9645\u4E0A<code>.then</code>\u662F\u5C5E\u4E8E\u5B8F\u4EFB\u52A1\u4E0B\u7684<strong>\u5FAE\u4EFB\u52A1\u961F\u5217</strong>\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC<strong>\u6574\u4F53\u4EE3\u7801\u7684\u5FAE\u4EFB\u52A1\u961F\u5217</strong>\uFF0C\u90A3\u4E48\u5FAE\u4EFB\u52A1\u961F\u5217\u4F1A\u5728\u4EC0\u4E48\u65F6\u5019\u6267\u884C\u5462\uFF1F</p><p>\u5F53\u524D\u7684\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u56E0\u4E3A\u5B8F\u4EFB\u52A1\u961F\u5217\u53EA\u6709\u4E00\u4E2A\uFF0C\u800C\u6BCF\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u90FD\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u7136\u540E\u56DE\u53BB\u5FAA\u73AF\u5F53\u524D\u5B8F\u4EFB\u52A1\u5BF9\u5E94\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u3002</p><p>\u7136\u540E\u6211\u4EEC\u6267\u884C<code>console.log(5)</code>\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed2b9858d90346349d0360506c2f0511~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u5230\u4E0A\u9762\u6267\u884C\u5B8C<code>console.log(5)</code>\u4E4B\u540E\uFF0C\u6211\u4EEC\u7684\u6574\u4F53\u4EE3\u7801\u7684\u5B8F\u4EFB\u52A1\u961F\u5217\u5C31\u6267\u884C\u5B8C\u6BD5\u4E86\u3002\u76EE\u524D\u6211\u4EEC\u7684\u5B8F\u4EFB\u52A1\u961F\u5217\u548C\u5FAE\u4EFB\u52A1\u961F\u5217\u72B6\u6001\u662F(\u6B64\u65F6\u6211\u4EEC\u6A21\u62DF\u7684\u662F\u5C06\u8981\u7ED3\u675F<code>script</code>\u5B8F\u4EFB\u52A1\u7ED3\u675F\u7684\u72B6\u6001)\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span>
    script\uFF1A<span class="token punctuation">{</span>
        <span class="token literal-property property">miscTask</span><span class="token operator">:</span> <span class="token punctuation">[</span>
           x<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">setTimeout</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">miscTask</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u6267\u884C\u6211\u4EEC\u7684<code>.then</code>\u51FD\u6570\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd67bc16cc1a4ace83a9d6b21481c584~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u5230\u4E86\u8FD9\u91CC\u5176\u5B9E\u5E76\u6CA1\u6709\u7ED3\u675F\uFF0C\u56E0\u4E3A\u6211\u4EEC\u7684<code>setTimeout(() =&gt; {...}, 2000)</code>\u8FD8\u5728\u6211\u4EEC\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u7136\u540E\u6211\u4EEC\u53BB\u5C06\u56DE\u8C03\u51FD\u6570\u653E\u5165\u6211\u4EEC\u7684\u6267\u884C\u6808\u4E2D\u6267\u884C:</p><blockquote><p>setTimeout(fn,0)\u7684\u542B\u4E49\u662F\uFF0C\u6307\u5B9A\u67D0\u4E2A\u4EFB\u52A1\u5728\u4E3B\u7EBF\u7A0B\u6700\u65E9\u53EF\u5F97\u7684\u7A7A\u95F2\u65F6\u95F4\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5C3D\u53EF\u80FD\u65E9\u5F97\u6267\u884C\u3002\u5B83\u5728&quot;\u4EFB\u52A1\u961F\u5217&quot;\u7684\u5C3E\u90E8\u6DFB\u52A0\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u56E0\u6B64\u8981\u7B49\u5230\u540C\u6B65\u4EFB\u52A1\u548C&quot;\u4EFB\u52A1\u961F\u5217&quot;\u73B0\u6709\u7684\u4E8B\u4EF6\u90FD\u5904\u7406\u5B8C\uFF0C\u624D\u4F1A\u5F97\u5230\u6267\u884C\u3002</p></blockquote><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bcd79df53fd4986b5e69b9e57f10fa2~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u7136\u540E\u6211\u4EEC\u8FDB\u5165\u6267\u884C\u6808\u4E2D\u53BB\u6267\u884C\u5BF9\u5E94\u7684\u5B9A\u65F6\u51FD\u6570\u548C<code>console</code>\uFF0C\u540C\u65F6<code>setTimeout</code>\u5C5E\u4E8E<code>window</code>\u4E0B\u7684\u5B9A\u65F6\u5668\uFF0C\u56E0\u6B64\u4E5F\u4F1A\u8C03\u7528webApi:</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c70f033841524bd899422d8e21723be8~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u6240\u4EE5\u6700\u7EC8\u7684\u7ED3\u679C\u662F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>1 3 5 4 2
</code></pre></div><p>\u6240\u4EE5\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u5462\uFF1F</p><ul><li>\u6D4F\u89C8\u5668\u7684\u4E8B\u4EF6\u5FAA\u73AF\u7531\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u961F\u5217+\u591A\u4E2A\u5FAE\u4EFB\u52A1\u961F\u5217\u7EC4\u6210\u3002</li><li>\u4EA7\u751F\u7684\u7684\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u8FDB\u5165\u5404\u81EA\u7684\u961F\u5217\u4E2D\u3002\u6267\u884C\u5B8C Script \u540E\uFF0C\u628A\u5F53\u524D\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u6E05\u7A7A\u3002\u5B8C\u6210\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u3002</li><li>\u63A5\u7740\u518D\u53D6\u51FA\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u540C\u6837\u628A\u5728\u6B64\u671F\u95F4\u4EA7\u751F\u7684\u56DE\u8C03\u5165\u961F\u3002\u518D\u628A\u5F53\u524D\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u6E05\u7A7A\u3002\u4EE5\u6B64\u5F80\u590D\u3002</li><li>\u5B8F\u4EFB\u52A1\u961F\u5217\u53EA\u6709\u4E00\u4E2A\uFF0C\u800C\u6BCF\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u90FD\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u6BCF\u8F6E\u5FAA\u73AF\u90FD\u662F\u7531\u4E00\u4E2A\u5B8F\u4EFB\u52A1+\u591A\u4E2A\u5FAE\u4EFB\u52A1\u7EC4\u6210\u3002</li></ul><h3 id="\u5173\u4E8E\u5FAA\u73AF\u5F15\u53D1\u7684\u9875\u9762\u9759\u6B62" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u5FAA\u73AF\u5F15\u53D1\u7684\u9875\u9762\u9759\u6B62" aria-hidden="true">#</a> \u5173\u4E8E\u5FAA\u73AF\u5F15\u53D1\u7684\u9875\u9762\u9759\u6B62</h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2d699bb2f5141d986eda3d190a8bc90~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>`,41),w={href:"https://event-loop-tests.glitch.me/while-true-test.html",target:"_blank",rel:"noopener noreferrer"},j=a("\u6D4B\u8BD5\u9875\u9762"),y=t(`<p>\u9996\u5148\u6211\u4EEC\u6765\u770B\u4E00\u6BB5\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u5728\u9875\u9762\u4E2D\u70B9\u51FB\u540E\u8FDB\u5165\u6B7B\u5FAA\u73AF\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9996\u5148\u70B9\u51FB\u540E\u53D1\u73B0\u8FD9\u6709\u4E00\u4E2A\u70B9\u51FB\u4EFB\u52A1\u52A0\u5165\u4EFB\u52A1\u961F\u5217\uFF0C\u7136\u540E\u4E8B\u4EF6\u5FAA\u73AF\u53BB\u6267\u884C\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF1A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/737e59fd3af54428bd318d78297d073e~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u4E0A\u56FE\u4E2D\u5DE6\u4FA7\u4EE3\u8868\u4EFB\u52A1\u961F\u5217\uFF0C\u4E2D\u95F4\u4EE3\u8868\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF0C\u7136\u540E\u53F3\u4FA7\u4EE3\u8868\u6D4F\u89C8\u5668\u7684\u4E3B\u8981\u7EBF\u7A0B\uFF0C\u4E5F\u5C31\u662F\u6837\u5F0F\u8BA1\u7B97\u3001Dom\u6E32\u67D3</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05dc412da1a848859a5ae0251ebda21f~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u7D27\u63A5\u7740\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u8FDB\u5165\u6B7B\u5FAA\u73AF\uFF0C\u5BFC\u81F4\u9875\u9762\u6240\u6709\u4E3B\u7EBF\u7A0B\u5DE5\u4F5C\u505C\u6B62\u3002\u6240\u4EE5\u6211\u4EEC\u7684\u9875\u9762\u6709\u65F6\u5019\u5C31\u4F1A\u51FA\u73B0\u76F4\u63A5\u767D\u5C4F\u6216\u8005\u6240\u6709\u7684\u64CD\u4F5C\u6CA1\u6709\u53CD\u5E94\u3002\u4F8B\u5982\u5728<code>React</code>\u7684\u51FD\u6570\u5F0F\u7EC4\u4EF6\u7684\u6E32\u67D3<code>Dom</code>\u4E2D\u53BB\u66F4\u65B0\u4F60\u7684<code>state</code>\u3002</p><h2 id="\u5E38\u89C1\u4EFB\u52A1\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u4EFB\u52A1\u5206\u7C7B" aria-hidden="true">#</a> \u5E38\u89C1\u4EFB\u52A1\u5206\u7C7B</h2><h3 id="\u5E38\u89C1\u7684\u5B8F\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u5B8F\u4EFB\u52A1" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u5B8F\u4EFB\u52A1</h3><ul><li>script\uFF08\u6574\u4F53\u4EE3\u7801\uFF09</li><li>setTimout</li><li>setInterval</li><li>setImmediate(node \u72EC\u6709)</li><li>requestAnimationFrame(\u6D4F\u89C8\u5668\u72EC\u6709)</li><li>IO</li><li>UI render\uFF08\u6D4F\u89C8\u5668\u72EC\u6709\uFF09</li></ul><h4 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout</h4><p>\u8BBE\u7F6E<code>setTimeout</code>\u4E3A0\u65F6\uFF0C\u4E3A\u4EC0\u4E48\u663E\u793A\u4E0D\u4F1A\u53BB\u6267\u884C\u6BCF\u4E00\u4E2A\u8FC7\u7A0B\uFF1F</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6b29a40cabc4a749a14d4a0915e00f0~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u8FD9\u91CC\u9700\u8981\u660E\u767D\uFF0C\u6D4F\u89C8\u5668\u7684\u5237\u65B0\u4E0D\u662F\u8BF4\u6309\u7167\u6211\u4EEC\u8BBE\u5B9A\u7684\u6700\u5C0F\u503C\u53BB\u6267\u884C\uFF0C\u800C\u662F\u663E\u793A\u5668\u672C\u8EAB\u7684\u7D20\u8D28\u6765\u51B3\u5B9A\uFF0C\u6BD4\u5982\u8BF4\u5237\u65B0\u738760hz,\u6240\u4EE5\u5BFC\u81F4\u6211\u4EEC\u7684\u90E8\u5206\u6E32\u67D3\u4E8B\u4EF6\u767D\u8D39\uFF0C\u56E0\u4E3A\u53EA\u4F1A\u6267\u884C\u5176\u4E2D\u7684\u4E00\u4E2A\u3002</p><p>\u4F46\u662F<code>setTimeout</code>\u672C\u8EAB\u5C31\u4E0D\u662F\u4E3A\u4E86\u505A\u52A8\u753B\u800C\u4EA7\u751F\u7684\uFF0C\u7531\u4E8E\u5B83\u7684\u4E0D\u7CBE\u786E\uFF0C\u5373\u4FBF\u4F60\u8BBE\u7F6E\u4E860\uFF0C\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u4E0A\u4F9D\u65E7\u4F1A\u6709\u9ED8\u8BA4\u7684\u6700\u5C0F\u503C\uFF0C\u6BD4\u5982Chrome\u76844ms\u3002\u6B63\u56E0\u5982\u6B64\uFF0C\u4F7F\u7528<code>setTimeout</code>\u6267\u884C\u52A8\u753B\uFF0C\u5F80\u5F80\u4F1A\u4EA7\u751F\u4E00\u4E9B\u660E\u663E\u7684\u6F02\u79FB\u73B0\u8C61\uFF08\u5728\u67D0\u4E00\u5E27\u91CC\u6D4F\u89C8\u5668\u6E32\u67D3\u5565\u4E5F\u6CA1\u5E72\uFF0C\u4F46\u662F\u5230\u4E86\u4E0B\u4E00\u5E27\u7684\u65F6\u5019\u53BB\u505A\u4E86\u4E24\u500D\u7684\u4E8B\u60C5\uFF09\u3002</p><h4 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe" aria-hidden="true">#</a> requestAnimationFrame</h4><p><strong><code>window.requestAnimationFrame()</code></strong> \xA0\u544A\u8BC9\u6D4F\u89C8\u5668\u2014\u2014\u4F60\u5E0C\u671B\u6267\u884C\u4E00\u4E2A\u52A8\u753B\uFF0C\u5E76\u4E14\u8981\u6C42\u6D4F\u89C8\u5668\u5728\u4E0B\u6B21\u91CD\u7ED8\u4E4B\u524D\u8C03\u7528\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u66F4\u65B0\u52A8\u753B\u3002\u8BE5\u65B9\u6CD5\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6D4F\u89C8\u5668\u4E0B\u4E00\u6B21\u91CD\u7ED8\u4E4B\u524D\u6267\u884C\u3002\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\uFF08\u4EC5\u9650Chrome\uFF09\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0edf6836253c4317b9c359edbeb32cf2~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u5B83\u7684\u6267\u884C\u8FC7\u7A0B\u66F4\u50CF\u8FD9\u6837\uFF0C\u4E0B\u9762\u7684\u6BCF\u4E00\u4E2A\u767D\u8272\u900F\u660E\u65B9\u5757\u4EE3\u8868\u4E00\u5E27\u5185\u7684\u6E32\u67D3\u7EBF\u7A0B\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25fea850f92a4dbd954eb39c7135b89b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u76F8\u6BD4\u8D77<code>setTimeout</code>\u5B83\u662F\u9488\u5BF9\u6BCF\u4E00\u5E27\u7684\u8FC7\u7A0B\u53BB\u5904\u7406\uFF0C\u907F\u514D\u4E86\u6267\u884C\u4EFB\u52A1\u7CBE\u5EA6\u4E22\u5931\u7684\u95EE\u9898\u3002</p><h3 id="\u5E38\u89C1\u7684\u5FAE\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u5FAE\u4EFB\u52A1</h3><ul><li>process.nextTick(node \u72EC\u6709)</li><li>Promise.then()</li><li>Object.observe</li><li>MutationObserver</li></ul><h4 id="mutationobserver" tabindex="-1"><a class="header-anchor" href="#mutationobserver" aria-hidden="true">#</a> MutationObserver</h4>`,24),I={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"MutationObserver",-1),C=a("\u63A5\u53E3\u63D0\u4F9B\u4E86\u76D1\u89C6\u5BF9DOM\u6811\u6240\u505A\u66F4\u6539\u7684\u80FD\u529B\u3002\u5B83\u88AB\u8BBE\u8BA1\u4E3A\u65E7\u7684Mutation Events\u529F\u80FD\u7684\u66FF\u4EE3\u54C1\uFF0C\u8BE5\u529F\u80FD\u662FDOM3 Events\u89C4\u8303\u7684\u4E00\u90E8\u5206\u3002"),A=n("h3",{id:"\u4E3A\u4EC0\u4E48\u8981\u6709\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E3A\u4EC0\u4E48\u8981\u6709\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1","aria-hidden":"true"},"#"),a(" \u4E3A\u4EC0\u4E48\u8981\u6709\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\uFF1F")],-1),S=a("\u4E3A\u4E86\u534F\u8C03\u4E8B\u4EF6\u3001\u7528\u6237\u4EA4\u4E92\u3001\u811A\u672C\u3001\u6E32\u67D3\u3001\u7F51\u7EDC\u7B49\uFF0C\u7528\u6237\u4EE3\u7406\u5FC5\u987B\u4F7F\u7528\u672C\u8282\u4E2D\u63CF\u8FF0\u7684\u4E8B\u4EF6\u5FAA\u73AF\u3002\u6BCF\u4E2A"),Z={href:"https://tc39.es/ecma262/#sec-agents",target:"_blank",rel:"noopener noreferrer"},G=a("\u4EE3\u7406"),q=a("\u90FD\u6709\u4E00\u4E2A\u5173\u8054\u7684\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u8FD9\u662F\u8BE5\u4EE3\u7406\u72EC\u6709\u7684\u3002\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u4EFB\u52A1\u88AB\u5206\u4E3A\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\uFF0C\u662F\u4E3A\u4E86\u7ED9\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u4E00\u4E2A\u63D2\u961F\u7684\u673A\u4F1A\uFF1A\u5FAE\u4EFB\u52A1\u6BD4\u5B8F\u4EFB\u52A1\u6709\u66F4\u9AD8\u4F18\u5148\u7EA7\u3002"),J=n("h2",{id:"\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),a(" \u53C2\u8003")],-1),K={href:"https://zh.javascript.info/event-loop",target:"_blank",rel:"noopener noreferrer"},R=a("# \u4E8B\u4EF6\u5FAA\u73AF\uFF1A\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1"),V={href:"https://mp.weixin.qq.com/s/FzlZOPyjjd9RpBumT7V9RA",target:"_blank",rel:"noopener noreferrer"},N=a("# \u963F\u91CC\u4E00\u9762\uFF1A\u719F\u6089\u4E8B\u4EF6\u5FAA\u73AF\uFF1F\u90A3\u8C08\u8C08\u4E3A\u4EC0\u4E48\u4F1A\u5206\u4E3A\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u3002"),T={href:"https://mp.weixin.qq.com/s/-cHJa8k3Mk7jtYzKeZlj-w",target:"_blank",rel:"noopener noreferrer"},z=a("# \u719F\u6089\u4E8B\u4EF6\u5FAA\u73AF\uFF1F\u90A3\u8C08\u8C08\u4E3A\u4EC0\u4E48\u4F1A\u5206\u4E3A\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u3002"),B={href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loops",target:"_blank",rel:"noopener noreferrer"},D=a("# Event loops"),O={href:"http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D",target:"_blank",rel:"noopener noreferrer"},P=a("# Loupe"),M={href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"},W=a("# JavaScript \u8FD0\u884C\u673A\u5236\u8BE6\u89E3\uFF1A\u518D\u8C08Event Loop"),L={href:"https://www.oschina.net/translate/how-does-javascript-actually-work-part-1",target:"_blank",rel:"noopener noreferrer"},E=a("# \u89E3\u8BFB JavaScript \u4E4B\u5F15\u64CE\u3001\u8FD0\u884C\u65F6\u548C\u5806\u6808\u8C03\u7528"),Y={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"},H=a("# MutationObserver");function F(X,U){const s=o("ExternalLinkIcon");return c(),i(l,null,[u,n("p",null,[d,n("a",b,[k,e(s)]),m]),h,n("blockquote",null,[n("p",null,[g,n("a",f,[_,e(s)])])]),v,n("p",null,[n("a",w,[j,e(s)])]),y,n("p",null,[n("a",I,[x,e(s)]),C]),A,n("p",null,[S,n("a",Z,[G,e(s)]),q]),J,n("ul",null,[n("li",null,[n("a",K,[R,e(s)])]),n("li",null,[n("a",V,[N,e(s)])]),n("li",null,[n("a",T,[z,e(s)])]),n("li",null,[n("a",B,[D,e(s)])]),n("li",null,[n("a",O,[P,e(s)])]),n("li",null,[n("a",M,[W,e(s)])]),n("li",null,[n("a",L,[E,e(s)])]),n("li",null,[n("a",Y,[H,e(s)])])])],64)}var $=p(r,[["render",F],["__file","JS-\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236.html.vue"]]);export{$ as default};

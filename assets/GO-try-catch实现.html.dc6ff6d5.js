import{_ as a,r as p,o as e,c as t,a as n,b as o,F as c,d as l,e as r}from"./app.1f59b63a.js";const u={},i=l(`<h1 id="go-try-catch" tabindex="-1"><a class="header-anchor" href="#go-try-catch" aria-hidden="true">#</a> GO try catch</h1><h2 id="go\u4E2D\u79BB\u8C31\u7684\u9519\u8BEF\u7684\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#go\u4E2D\u79BB\u8C31\u7684\u9519\u8BEF\u7684\u5904\u7406" aria-hidden="true">#</a> Go\u4E2D\u79BB\u8C31\u7684\u9519\u8BEF\u7684\u5904\u7406</h2><p>\u5728<code>go</code>\u8FD9\u95E8\u8BED\u8A00\u7684\u5B66\u4E60\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4E2A\u4EBA\u975E\u5E38\u559C\u6B22\u4F7F\u7528\u51FD\u6570\u5F0F\u7684\u5199\u6CD5\u53BB\u62C6\u5206\u51FD\u6570\uFF0C\u8FD9\u5C31\u5BFC\u81F4\u6211\u5728\u5BF9\u5E94\u7684\u591A\u4E2A\u6B65\u9AA4\u7684\u529F\u80FD\u9519\u8BEF\u5904\u7406\u8FC7\u7A0B\u4E2D\u9677\u5165\u4E86\u56F0\u96BE\u7684\u5883\u5730\u3002 \u8981\u4E48\u4EA7\u751F\u4E25\u91CD\u7684\u56DE\u8C03\u5730\u72F1\uFF0C\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
  <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
   <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">three</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
    <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">four</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
     <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">five</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
      <span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
      <span class="token keyword">return</span> <span class="token boolean">nil</span>  
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
      <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
      <span class="token keyword">return</span> err  
     <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
     <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
     <span class="token keyword">return</span> err  
    <span class="token punctuation">}</span>  
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
    <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token keyword">return</span> err  
   <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>  
   <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
   <span class="token keyword">return</span> err  
  <span class="token punctuation">}</span>  
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u8981\u4E48\u5B58\u5728\u5927\u91CF\u91CD\u590D\u7684\u4EE3\u7801\uFF0C\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code> <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">one</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
  <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  <span class="token keyword">return</span> err  
 <span class="token punctuation">}</span>  
 <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
  <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  <span class="token keyword">return</span> err  
 <span class="token punctuation">}</span>  
 <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">three</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
  <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  <span class="token keyword">return</span> err  
 <span class="token punctuation">}</span>  
  
 <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">four</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
  <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  <span class="token keyword">return</span> err  
 <span class="token punctuation">}</span>  
 <span class="token keyword">if</span> err <span class="token operator">=</span> <span class="token function">five</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>  
  <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
  <span class="token keyword">return</span> err  
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u6B63\u597D\u4ECA\u65E5\u770B\u5230\u5173\u4E8E<code>go</code>\u4E2D\u8FD9\u7C7B\u9519\u8BEF\u7684\u5904\u7406\uFF0C\u7279\u5730\u819C\u62DC\u8BB0\u5F55\u4E0B\u3002</p><h2 id="\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0\uFF1F</h2><p>\u901A\u8FC7<code>Do</code>\u51FD\u6570\u6765\u63A7\u5236\u7ED3\u6784\u4F53\u7684\u6267\u884C\uFF0C\u53EA\u8981\u51FA\u73B0\u9519\u8BEF\u6211\u4EEC\u5C31\u6355\u83B7\u8FDB\u5165<code>catch</code>\u51FD\u6570\uFF0C\u5426\u5219\u6267\u884C\u5B8C\u6210<code>try</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type Block struct {  
 Try func()  
 Catch func(interface{})  
 Finally func()  
}  
  
func (t Block) Do() {  
 if t.Finally != nil {  
  defer t.Finally()  
 }  
 if t.Catch != nil {  
  defer func() {  
   if r := recover(); r != nil {  
    t.Catch(r)  
   }  
  }()  
 }  
 t.Try()  
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,11),k={href:"https://mp.weixin.qq.com/s/JMeurhmAsYFPjpeMMbPdiQ",target:"_blank",rel:"noopener noreferrer"},b=r("# golang\u5982\u4F55\u4F18\u96C5\u7684\u7F16\u5199\u4E8B\u52A1\u4EE3\u7801");function d(m,f){const s=p("ExternalLinkIcon");return e(),t(c,null,[i,n("ul",null,[n("li",null,[n("a",k,[b,o(s)])])])],64)}var y=a(u,[["render",d],["__file","GO-try-catch\u5B9E\u73B0.html.vue"]]);export{y as default};

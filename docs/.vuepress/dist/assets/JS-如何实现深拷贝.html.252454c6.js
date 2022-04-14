import{_ as n,d as s}from"./app.07af11fc.js";const a={},p=s(`<blockquote><p>\u6DF1\u5EA6\u514B\u9686\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u5BF9\u4E8E\u5F15\u7528\u7684\u6570\u636E\u8FDB\u884C\u514B\u9686\u7684\u95EE\u9898\u3002</p></blockquote><h2 id="weakmap\u7248" tabindex="-1"><a class="header-anchor" href="#weakmap\u7248" aria-hidden="true">#</a> weakMap\u7248</h2><ul><li>\u5B58\u50A8\u904D\u5386\u540E\u7684\u5143\u7D20\uFF0C\u907F\u514D\u4E86\u51FA\u73B0\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898</li><li>BFS\u904D\u5386</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 <span class="token keyword">if</span> <span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 <span class="token keyword">return</span> obj<span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

 <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> reference <span class="token operator">=</span> <span class="token punctuation">[</span>Date<span class="token punctuation">,</span> RegExp<span class="token punctuation">,</span> Set<span class="token punctuation">,</span> WeakSet<span class="token punctuation">,</span> Map<span class="token punctuation">,</span> WeakMap<span class="token punctuation">,</span> Error<span class="token punctuation">]</span><span class="token punctuation">;</span>

 <span class="token keyword">if</span> <span class="token punctuation">(</span>reference<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>obj<span class="token operator">?.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>constructor</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 obj<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

 res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>

 <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

 <span class="token punctuation">}</span>

 hash<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

 res <span class="token operator">=</span> obj<span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

 <span class="token keyword">return</span> res<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div>`,4);function t(e,o){return p}var l=n(a,[["render",t],["__file","JS-\u5982\u4F55\u5B9E\u73B0\u6DF1\u62F7\u8D1D.html.vue"]]);export{l as default};

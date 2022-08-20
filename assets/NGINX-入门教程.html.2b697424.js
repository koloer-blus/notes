import{_ as a,r as e,o as p,c as l,a as n,b as c,F as t,d as r,e as o}from"./app.1f59b63a.js";const i={},u=r(`<h1 id="nginx\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#nginx\u5165\u95E8" aria-hidden="true">#</a> Nginx\u5165\u95E8</h1><blockquote><p>\u201CNginx \u662F\u4E00\u6B3E\u8F7B\u91CF\u7EA7\u7684 HTTP \u670D\u52A1\u5668\uFF0C\u91C7\u7528\u4E8B\u4EF6\u9A71\u52A8\u7684\u5F02\u6B65\u975E\u963B\u585E\u5904\u7406\u65B9\u5F0F\u6846\u67B6\uFF0C\u8FD9\u8BA9\u5176\u5177\u6709\u6781\u597D\u7684 IO \u6027\u80FD\uFF0C\u65F6\u5E38\u7528\u4E8E\u670D\u52A1\u7AEF\u7684<strong>\u53CD\u5411\u4EE3\u7406</strong>\u548C<strong>\u8D1F\u8F7D\u5747\u8861</strong>\u3002\u201D</p></blockquote><ul><li>\u4F18\u70B9 <ul><li>\u8F7B\u91CFweb\u670D\u52A1\u5668</li><li>\u5F02\u6B65\u975E\u963B\u585E\u5904\u7406\uFF08node\u5F02\u66F2\u540C\u5DE5\u4E4B\u5999\uFF09</li><li>\u5360\u7528\u5185\u5B58\u5C11\u3001\u542F\u52A8\u901F\u5EA6\u5FEB\u3001\u5E76\u53D1\u80FD\u529B\u5F3A</li><li>\u6269\u5C55\u6027\u597D</li></ul></li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li>ubuntu <ul><li><code>apt install nginx</code></li></ul></li><li>mac <ul><li><code>brew install nginx</code></li></ul></li></ul><h2 id="\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true">#</a> \u5E94\u7528</h2><ol><li><p>\u52A8\u9759\u5206\u79BB</p><blockquote><p>nginx\u5C06\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u5206\u4E3A\u52A8\u6001\u8BF7\u6C42\u548C\u9759\u6001\u8BF7\u6C42</p></blockquote><ul><li>\u9759\u6001 <ul><li>\u9759\u6001\u8BF7\u6C42\u76F4\u63A5\u4ECE\u670D\u52A1\u5668\u4E2D\u8BBE\u5B9A\u7684\u6839\u8DEF\u5F84\u4E2D\u53D6\u8D44\u6E90\u3002</li></ul></li><li>\u52A8\u6001 <ul><li>\u52A8\u6001\u8BF7\u6C42\u901A\u8FC7\u53D1\u7ED9\u540E\u53F0\u670D\u52A1\u5668\uFF0C\u5982\uFF1Anodejs\u670D\u52A1\u5668\u6216\u8005Tomcat\u7B49\u3002</li></ul></li></ul></li></ol><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22a35985e85143b7a8380469dcdba4a7~tplv-k3u1fbpfcp-watermark.image" alt=""></p><ol start="2"><li><p>\u53CD\u5411\u4EE3\u7406</p><blockquote><p>\u53CD\u5411\u4EE3\u7406\u5C31\u662F\u7531nginx\u5BF9\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684\u8BF7\u6C42\u8FDB\u884C\u8F6C\u53D1</p><p><strong>\u53CD\u5411\u4EE3\u7406\u201C\u4EE3\u7406\u201D\u7684\u662F\u670D\u52A1\u7AEF</strong>\u3002</p></blockquote></li></ol><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fa3259fad9546ec95d449d19e9d9533~tplv-k3u1fbpfcp-watermark.image" alt=""></p><ul><li>\u4F5C\u7528 <ul><li>\u4FDD\u969C\u670D\u52A1\u5668\u7684\u5B89\u5168(\u5BA2\u6237\u7AEF\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u5230\u670D\u52A1\u5668)</li><li>\u8D1F\u8F7D\u5747\u8861</li><li>\u89E3\u51B3\u8DE8\u57DF</li></ul></li></ul><ol start="3"><li><p>\u8D1F\u8F7D\u5747\u8861</p><blockquote><p>\u5C06\u8BF7\u6C42\u6839\u636E\u5F53\u524D\u60C5\u51B5\u5206\u914D\u5230\u4E0D\u540C\u7684\u7AEF\u53E3</p></blockquote><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19ec24ee41594923b76fb2ddd7a139d1~tplv-k3u1fbpfcp-watermark.image" alt=""></p></li><li><p>\u6B63\u5411\u4EE3\u7406</p><blockquote><p>\u5C06\u591A\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u901A\u8FC7\u4EE3\u7406\u5168\u90E8\u7531\u4E00\u4E2A\u670D\u52A1\u5668\u7AEF\u5904\u7406(\u6BD4\u5982vpn)</p><p><strong>\u6B63\u5411\u4EE3\u7406\u201C\u4EE3\u7406\u201D\u7684\u662F\u5BA2\u6237\u7AEF\u3002</strong><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52d69db3201b4176b73ded8f7625bc98~tplv-k3u1fbpfcp-watermark.image" alt=""></p></blockquote></li></ol><h2 id="nginx\u5E95\u5C42\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#nginx\u5E95\u5C42\u8FDB\u7A0B" aria-hidden="true">#</a> nginx\u5E95\u5C42\u8FDB\u7A0B</h2><h3 id="nginx\u542F\u52A8\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#nginx\u542F\u52A8\u65B9\u5F0F" aria-hidden="true">#</a> nginx\u542F\u52A8\u65B9\u5F0F</h3><blockquote><p>\u4EE5daemon\u591A\u8FDB\u7A0B\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u5206\u4E3AMaster\u8FDB\u7A0B\u548C\u591A\u4E2AWorker\u8FDB\u7A0B</p></blockquote><ul><li>Master <ul><li>\u63A5\u6536\u5916\u754C\u4FE1\u53F7\u5E76\u5411worker\u53D1\u9001\u4FE1\u53F7</li><li>\u76D1\u63A7worker\uFF0Cworker\u5F02\u5E38\u9000\u51FA\uFF0Cmaster\u81EA\u52A8\u91CD\u542F\u7CFB\u7684worker</li></ul></li><li>worker <ul><li>\u5904\u7406\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5E76\u4E14worker\u7684\u4E2A\u6570\u4E00\u822C\u548Ccpu\u7684\u6838\u6570\u4E00\u81F4\uFF0Cworker\u4E4B\u95F4\u662F\u76F8\u4E92\u72EC\u7ACB\u7684</li></ul></li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3304fbbd380e4948879c502c9a5d66e5~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><ul><li><p>\u542F\u52A8</p><ul><li><code>sudo nginx</code></li></ul></li><li><p>\u505C\u6B62</p><ul><li><code>sudo nginx -s stop</code></li></ul></li><li><p>\u70ED\u91CD\u542F</p><ul><li><code>sudo nginx -s reload</code></li></ul></li><li><p>\u5F3A\u5236\u505C\u6B62</p><ul><li><code>sudo nginx -s quit</code></li></ul></li></ul><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><ul><li><p>\u5168\u5C40\u5757</p><blockquote><p>\u8BBE\u7F6E\u4E00\u4E9B\u5F71\u54CDnginx\u670D\u52A1\u5668\u6574\u4F53\u8FD0\u884C\u7684\u914D\u7F6E\u6307\u4EE4</p></blockquote><ul><li><code>worker_processes 2;</code><ul><li>\u5E76\u53D1\u670D\u52A1\u7684\u914D\u7F6E \uFF0C\u4E0A\u9762\u8FD9\u79CD\u5199\u6CD5\u4EE3\u8868\u6700\u591A\u63A5\u53D72\u4E2A\u5E76\u53D1\u8BF7\u6C42</li></ul></li></ul></li><li><p>events\u5757</p><blockquote><p>\u5F71\u54CDnginx\u670D\u52A1\u5668\u4E0E\u7528\u6237\u7684\u7F51\u7EDC\u8FDE\u63A5</p></blockquote><ul><li><code>worker_connections 1024</code><ul><li>\u652F\u6301\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u4E0A\u9762\u8FD9\u79CD\u5199\u6CD5\u4EE3\u8868\u6700\u5927\u8FDE\u63A5\u6570\u4E3A1024</li></ul></li></ul></li><li><p>http\u5757</p><blockquote><p>\u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E\uFF0C\u76D1\u542C\u7AEF\u2F1D\u7684\u914D\u7F6E\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u3001\u53CD\u5411\u4EE3\u7406\u3001\u8D1F\u8F7D\u5747\u8861\u7B49</p></blockquote><ul><li><p><code>server</code></p><ul><li><p><code>listen 3000;</code></p><ul><li>\u76D1\u542C3000\u7AEF\u53E3</li></ul></li><li><p><code>server_name localhost;</code></p><ul><li>\u5B9A\u4E49\u8BBF\u95EE\u7684\u4E3B\u673A\u5730\u5740\uFF0C\u5728\u8FD9\u91CC\u53EF\u4EE5\u4F7F\u7528\u81EA\u5DF1\u7684\u57DF\u540D</li></ul></li><li><p><code>chaarset</code></p><ul><li>\u5B57\u7B26\u96C6</li></ul></li><li><p><strong>location</strong></p><ul><li><p>\u8BF7\u6C42\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
	<span class="token comment"># root\u4EE3\u8868\u8BF7\u6C42\u5185\u5BB9\u7684\u9ED8\u8BA4\u4F4D\u7F6E\uFF0C\u4EE5 / \uFF08\u6839\u76EE\u5F55\uFF09\u5F00\u59CB</span>
	root /home/admin<span class="token punctuation">;</span> 
	<span class="token comment"># \u6B22\u8FCE\u9875</span>
	index index.html index.htm<span class="token punctuation">;</span>
	<span class="token comment"># \u53CD\u5411\u4EE3\u7406\u7684\u76EE\u6807\u5730\u5740</span>
	proxy_pass http://127.0.0.1:9300<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul></li><li><p><strong>upstream</strong></p><ul><li><p>\u8D1F\u8F7D\u5747\u8861</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>upstream lagouServer<span class="token punctuation">{</span>
	<span class="token comment">#\u5C06\u5F53\u524D\u670D\u52A1\u5668\u7684\u8BF7\u6C42\u5206\u53D1\u5230\u4E24\u4E2A\u7AEF\u53E3  weight\u4EE3\u8868\u6743\u91CD\u5206\u914D\u4F18\u5148\u7EA7</span>
	ip_hash<span class="token punctuation">;</span> <span class="token comment">#\u6309ip\u8D70</span>
    server <span class="token number">111.229</span>.248.243:8080 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    server <span class="token number">111.229</span>.248.243:8082 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul></li></ul></li></ul></li></ul><h3 id="\u8BE6\u7EC6\u914D\u7F6E-nginx-conf" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u7EC6\u914D\u7F6E-nginx-conf" aria-hidden="true">#</a> \u8BE6\u7EC6\u914D\u7F6E(nginx.conf)</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B9A\u4E49Nginx\u8FD0\u884C\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4</span>
user www www<span class="token punctuation">;</span> 

<span class="token comment">#nginx\u8FDB\u7A0B\u6570\uFF0C\u901A\u5E38\u8BBE\u7F6E\u6210\u548Ccpu\u7684\u6570\u91CF\u76F8\u7B49</span>
worker_processes <span class="token number">4</span><span class="token punctuation">;</span> 

<span class="token comment">#\u5168\u5C40\u9519\u8BEF\u65E5\u5FD7\u5B9A\u4E49\u7C7B\u578B\uFF0C[debug | info | notice | warn | error | crit]</span>
<span class="token comment">#error_log  /data/nginx/logs/error.log;</span>
<span class="token comment">#error_log  /data/nginx/logs/error.log  notice;</span>

<span class="token comment">#\u65E5\u5FD7\u6587\u4EF6\u5B58\u653E\u8DEF\u5F84 access_log path [format [buffer=size | off]]</span>
access_log /data/nginx/logs/lazyegg.com/web/access.log combinedio<span class="token punctuation">;</span>

<span class="token comment">#\u8FDB\u7A0Bpid\u6587\u4EF6</span>
<span class="token comment">#pid        logs/nginx.pid;</span>

<span class="token comment">#\u6307\u5B9A\u8FDB\u7A0B\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u63CF\u8FF0\u7B26\uFF1A\u6570\u76EE</span>
<span class="token comment">#\u5DE5\u4F5C\u6A21\u5F0F\u4E0E\u8FDE\u63A5\u6570\u4E0A\u9650</span>
<span class="token comment">##\u8FD9\u4E2A\u6307\u4EE4\u662F\u6307\u5F53\u4E00\u4E2Anginx\u8FDB\u7A0B\u6253\u5F00\u7684\u6700\u591A\u6587\u4EF6\u63CF\u8FF0\u7B26\u6570\u76EE\uFF0C\u7406\u8BBA\u503C\u5E94\u8BE5\u662F\u6700\u591A\u6253\u5F00\u6587\u4EF6\u6570\uFF08ulimit -n\uFF09\u4E0Enginx\u8FDB\u7A0B\u6570\u76F8\u9664\uFF0C\u4F46\u662Fnginx\u5206\u914D\u8BF7\u6C42\u5E76\u4E0D\u662F\u90A3\u4E48\u5747\u5300\uFF0C\u6240\u4EE5\u6700\u597D\u4E0Eulimit -n \u7684\u503C\u4FDD\u6301\u4E00\u81F4\u3002</span>
<span class="token comment">#\u8FD9\u662F\u56E0\u4E3Anginx\u8C03\u5EA6\u65F6\u5206\u914D\u8BF7\u6C42\u5230\u8FDB\u7A0B\u5E76\u4E0D\u662F\u90A3\u4E48\u7684\u5747\u8861\uFF0C\u6240\u4EE5\u5047\u5982\u586B\u519910240\uFF0C\u603B\u5E76\u53D1\u91CF\u8FBE\u52303-4\u4E07\u65F6\u5C31\u6709\u8FDB\u7A0B\u53EF\u80FD\u8D85\u8FC710240\u4E86\uFF0C\u8FD9\u65F6\u4F1A\u8FD4\u56DE502\u9519\u8BEF\u3002</span>
worker_rlimit_nofile <span class="token number">65535</span><span class="token punctuation">;</span>

<span class="token comment">#################################  events  ###############################</span>
events <span class="token punctuation">{</span>
    <span class="token comment">#\u53C2\u8003\u4E8B\u4EF6\u6A21\u578B\uFF0Cuse [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll\u6A21\u578B</span>
    use epoll
    <span class="token comment">#\u5355\u4E2A\u8FDB\u7A0B\u6700\u5927\u8FDE\u63A5\u6570\uFF08\u6700\u5927\u8FDE\u63A5\u6570=\u8FDE\u63A5\u6570+\u8FDB\u7A0B\u6570\uFF09</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
    
    <span class="token comment">#keepalive \u8D85\u65F6\u65F6\u95F4</span>
    keepalive_timeout <span class="token number">60</span><span class="token punctuation">;</span>
    
    <span class="token comment">#\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u90E8\u7684\u7F13\u51B2\u533A\u5927\u5C0F\u3002</span>
    client_header_buffer_size 4k<span class="token punctuation">;</span>
    
    <span class="token comment">#\u8FD9\u4E2A\u5C06\u4E3A\u6253\u5F00\u6587\u4EF6\u6307\u5B9A\u7F13\u5B58\uFF0C\u9ED8\u8BA4\u662F\u6CA1\u6709\u542F\u7528\u7684\uFF0Cmax\u6307\u5B9A\u7F13\u5B58\u6570\u91CF\uFF0C\u5EFA\u8BAE\u548C\u6253\u5F00\u6587\u4EF6\u6570\u4E00\u81F4\uFF0Cinactive\u662F\u6307\u7ECF\u8FC7\u591A\u957F\u65F6\u95F4\u6587\u4EF6\u6CA1\u88AB\u8BF7\u6C42\u540E\u5220\u9664\u7F13\u5B58\u3002</span>
    open_file_cache <span class="token assign-left variable">max</span><span class="token operator">=</span><span class="token number">65535</span> <span class="token assign-left variable">inactive</span><span class="token operator">=</span>60s<span class="token punctuation">;</span>
    <span class="token comment">#\u8FD9\u4E2A\u662F\u6307\u591A\u957F\u65F6\u95F4\u68C0\u67E5\u4E00\u6B21\u7F13\u5B58\u7684\u6709\u6548\u4FE1\u606F\u3002</span>
    open_file_cache_valid 80s<span class="token punctuation">;</span>
        <span class="token comment">#open_file_cache\u6307\u4EE4\u4E2D\u7684inactive\u53C2\u6570\u65F6\u95F4\u5185\u6587\u4EF6\u7684\u6700\u5C11\u4F7F\u7528\u6B21\u6570\uFF0C\u5982\u679C\u8D85\u8FC7\u8FD9\u4E2A\u6570\u5B57\uFF0C\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E00\u76F4\u662F\u5728\u7F13\u5B58\u4E2D\u6253\u5F00\u7684\uFF0C\u5982\u4E0A\u4F8B\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u6587\u4EF6\u5728inactive\u65F6\u95F4\u5185\u4E00\u6B21\u6CA1\u88AB\u4F7F\u7528\uFF0C\u5B83\u5C06\u88AB\u79FB\u9664\u3002</span>
    open_file_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token comment">#\u8BED\u6CD5:open_file_cache_errors on | off \u9ED8\u8BA4\u503C:open_file_cache_errors off \u4F7F\u7528\u5B57\u6BB5:http, server, location \u8FD9\u4E2A\u6307\u4EE4\u6307\u5B9A\u662F\u5426\u5728\u641C\u7D22\u4E00\u4E2A\u6587\u4EF6\u662F\u8BB0\u5F55cache\u9519\u8BEF.</span>
    open_file_cache_errors on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">##############################   http    ##################################</span>

<span class="token comment">#\u8BBE\u5B9Ahttp\u670D\u52A1\u5668\uFF0C\u5229\u7528\u5B83\u7684\u53CD\u5411\u4EE3\u7406\u529F\u80FD\u63D0\u4F9B\u8D1F\u8F7D\u5747\u8861\u652F\u6301</span>
http<span class="token punctuation">{</span>
    <span class="token comment">#\u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\u8868</span>
    include mime.types<span class="token punctuation">;</span>
    
    <span class="token comment">#\u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B</span>
    default_type application/octet-stream<span class="token punctuation">;</span>
    
    <span class="token comment">#\u9ED8\u8BA4\u7F16\u7801</span>
    charset utf-8<span class="token punctuation">;</span>
    
    <span class="token comment">#\u670D\u52A1\u5668\u540D\u5B57\u7684hash\u8868\u5927\u5C0F</span>
    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span>
    
    <span class="token comment">#\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u90E8\u7684\u7F13\u51B2\u533A\u5927\u5C0F\u3002</span>
    client_header_buffer_size 32k<span class="token punctuation">;</span>
    
    <span class="token comment">#\u5BA2\u6237\u8BF7\u6C42\u5934\u7F13\u51B2\u5927\u5C0F\u3002</span>
    large_client_header_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    
    <span class="token comment">#\u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u4E2A\u6587\u4EF6\u5B57\u8282\u6570</span>
    client_max_body_size 8m<span class="token punctuation">;</span>
    
    <span class="token comment">#\u5F00\u542F\u9AD8\u6548\u6587\u4EF6\u4F20\u8F93\u6A21\u5F0F\uFF0Csendfile\u6307\u4EE4\u6307\u5B9Anginx\u662F\u5426\u8C03\u7528sendfile\u51FD\u6570\u6765\u8F93\u51FA\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u666E\u901A\u5E94\u7528\u8BBE\u4E3A on\uFF0C\u5982\u679C\u7528\u6765\u8FDB\u884C\u4E0B\u8F7D\u7B49\u5E94\u7528\u78C1\u76D8IO\u91CD\u8D1F\u8F7D\u5E94\u7528\uFF0C\u53EF\u8BBE\u7F6E\u4E3Aoff\uFF0C\u4EE5\u5E73\u8861\u78C1\u76D8\u4E0E\u7F51\u7EDCI/O\u5904\u7406\u901F\u5EA6\uFF0C\u964D\u4F4E\u7CFB\u7EDF\u7684\u8D1F\u8F7D\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u56FE\u7247\u663E\u793A\u4E0D\u6B63\u5E38\u628A\u8FD9\u4E2A\u6539\u6210off\u3002</span>
    sendfile on<span class="token punctuation">;</span>
    
    <span class="token comment">#\u5F00\u542F\u76EE\u5F55\u5217\u8868\u8BBF\u95EE\uFF0C\u9002\u5408\u4E0B\u8F7D\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u5173\u95ED\u3002</span>
    autoindex on<span class="token punctuation">;</span>
    
    <span class="token comment">#\u6B64\u9009\u9879\u5141\u8BB8\u6216\u7981\u6B62\u4F7F\u7528socke\u7684TCP_CORK\u7684\u9009\u9879\uFF0C\u6B64\u9009\u9879\u4EC5\u5728\u4F7F\u7528sendfile\u7684\u65F6\u5019\u4F7F\u7528</span>
    tcp_nopush on<span class="token punctuation">;</span>
     
    tcp_nodelay on<span class="token punctuation">;</span>
    
    <span class="token comment">#\u957F\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2</span>
    keepalive_timeout <span class="token number">120</span><span class="token punctuation">;</span>
    
    <span class="token comment">#FastCGI\u76F8\u5173\u53C2\u6570\u662F\u4E3A\u4E86\u6539\u5584\u7F51\u7AD9\u7684\u6027\u80FD\uFF1A\u51CF\u5C11\u8D44\u6E90\u5360\u7528\uFF0C\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6\u3002\u4E0B\u9762\u53C2\u6570\u770B\u5B57\u9762\u610F\u601D\u90FD\u80FD\u7406\u89E3\u3002</span>
    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_buffer_size 64k<span class="token punctuation">;</span>
    fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
    fastcgi_temp_file_write_size 128k<span class="token punctuation">;</span>
    
    <span class="token comment">#gzip\u6A21\u5757\u8BBE\u7F6E</span>
    <span class="token function">gzip</span> on<span class="token punctuation">;</span> <span class="token comment">#\u5F00\u542Fgzip\u538B\u7F29\u8F93\u51FA</span>
    gzip_min_length 1k<span class="token punctuation">;</span>    <span class="token comment">#\u6700\u5C0F\u538B\u7F29\u6587\u4EF6\u5927\u5C0F</span>
    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>    <span class="token comment">#\u538B\u7F29\u7F13\u51B2\u533A</span>
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span> <span class="token comment">#\u538B\u7F29\u7248\u672C\uFF08\u9ED8\u8BA41.1\uFF0C\u524D\u7AEF\u5982\u679C\u662Fsquid2.5\u8BF7\u4F7F\u75281.0\uFF09</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>     <span class="token comment">#\u538B\u7F29\u7B49\u7EA7</span>
    gzip_types text/plain application/x-javascript text/css application/xml<span class="token punctuation">;</span>    <span class="token comment">#\u538B\u7F29\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u5C31\u5DF2\u7ECF\u5305\u542Btextml\uFF0C\u6240\u4EE5\u4E0B\u9762\u5C31\u4E0D\u7528\u518D\u5199\u4E86\uFF0C\u5199\u4E0A\u53BB\u4E5F\u4E0D\u4F1A\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u6709\u4E00\u4E2Awarn\u3002</span>
    gzip_vary on<span class="token punctuation">;</span>

    <span class="token comment">#\u5F00\u542F\u9650\u5236IP\u8FDE\u63A5\u6570\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528</span>
    <span class="token comment">#limit_zone crawler $binary_remote_addr 10m;</span>
    
        <span class="token comment">#\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E</span>
    upstream lazyegg.net <span class="token punctuation">{</span>
  
        <span class="token comment">#upstream\u7684\u8D1F\u8F7D\u5747\u8861\uFF0Cweight\u662F\u6743\u91CD\uFF0C\u53EF\u4EE5\u6839\u636E\u673A\u5668\u914D\u7F6E\u5B9A\u4E49\u6743\u91CD\u3002weigth\u53C2\u6570\u8868\u793A\u6743\u503C\uFF0C\u6743\u503C\u8D8A\u9AD8\u88AB\u5206\u914D\u5230\u7684\u51E0\u7387\u8D8A\u5927\u3002</span>
        server <span class="token number">192.168</span>.80.121:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.80.122:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.80.123:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

        <span class="token comment">#nginx\u7684upstream\u76EE\u524D\u652F\u63014\u79CD\u65B9\u5F0F\u7684\u5206\u914D</span>
        <span class="token comment">#1\u3001\u8F6E\u8BE2\uFF08\u9ED8\u8BA4\uFF09</span>
        <span class="token comment">#\u6BCF\u4E2A\u8BF7\u6C42\u6309\u65F6\u95F4\u987A\u5E8F\u9010\u4E00\u5206\u914D\u5230\u4E0D\u540C\u7684\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u5982\u679C\u540E\u7AEF\u670D\u52A1\u5668down\u6389\uFF0C\u80FD\u81EA\u52A8\u5254\u9664\u3002</span>
        <span class="token comment">#2\u3001weight</span>
        <span class="token comment">#\u6307\u5B9A\u8F6E\u8BE2\u51E0\u7387\uFF0Cweight\u548C\u8BBF\u95EE\u6BD4\u7387\u6210\u6B63\u6BD4\uFF0C\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u5668\u6027\u80FD\u4E0D\u5747\u7684\u60C5\u51B5\u3002</span>
        <span class="token comment">#\u4F8B\u5982\uFF1A</span>
        <span class="token comment">#upstream bakend {</span>
        <span class="token comment">#    server 192.168.0.14 weight=10;</span>
        <span class="token comment">#    server 192.168.0.15 weight=10;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#2\u3001ip_hash</span>
        <span class="token comment">#\u6BCF\u4E2A\u8BF7\u6C42\u6309\u8BBF\u95EEip\u7684hash\u7ED3\u679C\u5206\u914D\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u8BBF\u5BA2\u56FA\u5B9A\u8BBF\u95EE\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u89E3\u51B3session\u7684\u95EE\u9898\u3002</span>
        <span class="token comment">#\u4F8B\u5982\uFF1A</span>
        <span class="token comment">#upstream bakend {</span>
        <span class="token comment">#    ip_hash;</span>
        <span class="token comment">#    server 192.168.0.14:88;</span>
        <span class="token comment">#    server 192.168.0.15:80;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#3\u3001fair\uFF08\u7B2C\u4E09\u65B9\uFF09</span>
        <span class="token comment">#\u6309\u540E\u7AEF\u670D\u52A1\u5668\u7684\u54CD\u5E94\u65F6\u95F4\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u54CD\u5E94\u65F6\u95F4\u77ED\u7684\u4F18\u5148\u5206\u914D\u3002</span>
        <span class="token comment">#upstream backend {</span>
        <span class="token comment">#    server server1;</span>
        <span class="token comment">#    server server2;</span>
        <span class="token comment">#    fair;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#4\u3001url_hash\uFF08\u7B2C\u4E09\u65B9\uFF09</span>
        <span class="token comment">#\u6309\u8BBF\u95EEurl\u7684hash\u7ED3\u679C\u6765\u5206\u914D\u8BF7\u6C42\uFF0C\u4F7F\u6BCF\u4E2Aurl\u5B9A\u5411\u5230\u540C\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u4E3A\u7F13\u5B58\u65F6\u6BD4\u8F83\u6709\u6548\u3002</span>
        <span class="token comment">#\u4F8B\uFF1A\u5728upstream\u4E2D\u52A0\u5165hash\u8BED\u53E5\uFF0Cserver\u8BED\u53E5\u4E2D\u4E0D\u80FD\u5199\u5165weight\u7B49\u5176\u4ED6\u7684\u53C2\u6570\uFF0Chash_method\u662F\u4F7F\u7528\u7684hash\u7B97\u6CD5</span>
        <span class="token comment">#upstream backend {</span>
        <span class="token comment">#    server squid1:3128;</span>
        <span class="token comment">#    server squid2:3128;</span>
        <span class="token comment">#    hash $request_uri;</span>
        <span class="token comment">#    hash_method crc32;</span>
        <span class="token comment">#}</span>

        <span class="token comment">#tips:</span>
        <span class="token comment">#upstream bakend{#\u5B9A\u4E49\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907\u7684Ip\u53CA\u8BBE\u5907\u72B6\u6001}{</span>
        <span class="token comment">#    ip_hash;</span>
        <span class="token comment">#    server 127.0.0.1:9090 down;</span>
        <span class="token comment">#    server 127.0.0.1:8080 weight=2;</span>
        <span class="token comment">#    server 127.0.0.1:6060;</span>
        <span class="token comment">#    server 127.0.0.1:7070 backup;</span>
        <span class="token comment">#}</span>
        <span class="token comment">#\u5728\u9700\u8981\u4F7F\u7528\u8D1F\u8F7D\u5747\u8861\u7684server\u4E2D\u589E\u52A0 proxy_pass http://bakend/;</span>

        <span class="token comment">#\u6BCF\u4E2A\u8BBE\u5907\u7684\u72B6\u6001\u8BBE\u7F6E\u4E3A:</span>
        <span class="token comment">#1.down\u8868\u793A\u5355\u524D\u7684server\u6682\u65F6\u4E0D\u53C2\u4E0E\u8D1F\u8F7D</span>
        <span class="token comment">#2.weight\u4E3Aweight\u8D8A\u5927\uFF0C\u8D1F\u8F7D\u7684\u6743\u91CD\u5C31\u8D8A\u5927\u3002</span>
        <span class="token comment">#3.max_fails\uFF1A\u5141\u8BB8\u8BF7\u6C42\u5931\u8D25\u7684\u6B21\u6570\u9ED8\u8BA4\u4E3A1.\u5F53\u8D85\u8FC7\u6700\u5927\u6B21\u6570\u65F6\uFF0C\u8FD4\u56DEproxy_next_upstream\u6A21\u5757\u5B9A\u4E49\u7684\u9519\u8BEF</span>
        <span class="token comment">#4.fail_timeout:max_fails\u6B21\u5931\u8D25\u540E\uFF0C\u6682\u505C\u7684\u65F6\u95F4\u3002</span>
        <span class="token comment">#5.backup\uFF1A \u5176\u5B83\u6240\u6709\u7684\u975Ebackup\u673A\u5668down\u6216\u8005\u5FD9\u7684\u65F6\u5019\uFF0C\u8BF7\u6C42backup\u673A\u5668\u3002\u6240\u4EE5\u8FD9\u53F0\u673A\u5668\u538B\u529B\u4F1A\u6700\u8F7B\u3002</span>

        <span class="token comment">#nginx\u652F\u6301\u540C\u65F6\u8BBE\u7F6E\u591A\u7EC4\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u7528\u6765\u7ED9\u4E0D\u7528\u7684server\u6765\u4F7F\u7528\u3002</span>
        <span class="token comment">#client_body_in_file_only\u8BBE\u7F6E\u4E3AOn \u53EF\u4EE5\u8BB2client post\u8FC7\u6765\u7684\u6570\u636E\u8BB0\u5F55\u5230\u6587\u4EF6\u4E2D\u7528\u6765\u505Adebug</span>
        <span class="token comment">#client_body_temp_path\u8BBE\u7F6E\u8BB0\u5F55\u6587\u4EF6\u7684\u76EE\u5F55 \u53EF\u4EE5\u8BBE\u7F6E\u6700\u591A3\u5C42\u76EE\u5F55</span>
        <span class="token comment">#location\u5BF9URL\u8FDB\u884C\u5339\u914D.\u53EF\u4EE5\u8FDB\u884C\u91CD\u5B9A\u5411\u6216\u8005\u8FDB\u884C\u65B0\u7684\u4EE3\u7406 \u8D1F\u8F7D\u5747\u8861</span>
    <span class="token punctuation">}</span>
    
       <span class="token comment">#\u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E</span>
    server <span class="token punctuation">{</span>
        <span class="token comment">#\u76D1\u542C\u7AEF\u53E3</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>

        <span class="token comment">#\u57DF\u540D\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u7528\u7A7A\u683C\u9694\u5F00</span>
        server_name lazyegg.net<span class="token punctuation">;</span>
        <span class="token comment">#\u9ED8\u8BA4\u5165\u53E3\u6587\u4EF6\u540D\u79F0</span>
        index index.html index.htm index.php<span class="token punctuation">;</span>
        root /data/www/lazyegg<span class="token punctuation">;</span>

        <span class="token comment">#\u5BF9******\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861</span>
        location ~ .*.<span class="token punctuation">(</span>php<span class="token operator">|</span>php5<span class="token punctuation">)</span>?$
        <span class="token punctuation">{</span>
            fastcgi_pass <span class="token number">127.0</span>.0.1:9000<span class="token punctuation">;</span>
            fastcgi_index index.php<span class="token punctuation">;</span>
            include fastcgi.conf<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         
        <span class="token comment">#\u56FE\u7247\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E</span>
        location ~ .*.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$
        <span class="token punctuation">{</span>
            expires 10d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         
        <span class="token comment">#JS\u548CCSS\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E</span>
        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
        <span class="token punctuation">{</span>
            expires 1h<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         
        <span class="token comment">#\u65E5\u5FD7\u683C\u5F0F\u8BBE\u5B9A</span>
        <span class="token comment">#$remote_addr\u4E0E$http_x_forwarded_for\u7528\u4EE5\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7684ip\u5730\u5740\uFF1B</span>
        <span class="token comment">#$remote_user\uFF1A\u7528\u6765\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7528\u6237\u540D\u79F0\uFF1B</span>
        <span class="token comment">#$time_local\uFF1A \u7528\u6765\u8BB0\u5F55\u8BBF\u95EE\u65F6\u95F4\u4E0E\u65F6\u533A\uFF1B</span>
        <span class="token comment">#$request\uFF1A \u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u7684url\u4E0Ehttp\u534F\u8BAE\uFF1B</span>
        <span class="token comment">#$status\uFF1A \u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u72B6\u6001\uFF1B\u6210\u529F\u662F200\uFF0C</span>
        <span class="token comment">#$body_bytes_sent \uFF1A\u8BB0\u5F55\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u6587\u4EF6\u4E3B\u4F53\u5185\u5BB9\u5927\u5C0F\uFF1B</span>
        <span class="token comment">#$http_referer\uFF1A\u7528\u6765\u8BB0\u5F55\u4ECE\u90A3\u4E2A\u9875\u9762\u94FE\u63A5\u8BBF\u95EE\u8FC7\u6765\u7684\uFF1B</span>
        <span class="token comment">#$http_user_agent\uFF1A\u8BB0\u5F55\u5BA2\u6237\u6D4F\u89C8\u5668\u7684\u76F8\u5173\u4FE1\u606F\uFF1B</span>
        <span class="token comment">#\u901A\u5E38web\u670D\u52A1\u5668\u653E\u5728\u53CD\u5411\u4EE3\u7406\u7684\u540E\u9762\uFF0C\u8FD9\u6837\u5C31\u4E0D\u80FD\u83B7\u53D6\u5230\u5BA2\u6237\u7684IP\u5730\u5740\u4E86\uFF0C\u901A\u8FC7$remote_add\u62FF\u5230\u7684IP\u5730\u5740\u662F\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u7684iP\u5730\u5740\u3002\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u5728\u8F6C\u53D1\u8BF7\u6C42\u7684http\u5934\u4FE1\u606F\u4E2D\uFF0C\u53EF\u4EE5\u589E\u52A0x_forwarded_for\u4FE1\u606F\uFF0C\u7528\u4EE5\u8BB0\u5F55\u539F\u6709\u5BA2\u6237\u7AEF\u7684IP\u5730\u5740\u548C\u539F\u6765\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u7684\u670D\u52A1\u5668\u5730\u5740\u3002</span>
        log_format access <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
        <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
        <span class="token string">&#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;</span><span class="token punctuation">;</span>
         
        <span class="token comment">#\u5B9A\u4E49\u672C\u865A\u62DF\u4E3B\u673A\u7684\u8BBF\u95EE\u65E5\u5FD7</span>
        access_log  /usr/local/nginx/logs/host.access.log  main<span class="token punctuation">;</span>
        access_log  /usr/local/nginx/logs/host.access.404.log  log404<span class="token punctuation">;</span>
         
        <span class="token comment">#\u5BF9 &quot;/connect-controller&quot; \u542F\u7528\u53CD\u5411\u4EE3\u7406</span>
        location /connect-controller <span class="token punctuation">{</span>
            proxy_pass http://127.0.0.1:88<span class="token punctuation">;</span> <span class="token comment">#\u8BF7\u6CE8\u610F\u6B64\u5904\u7AEF\u53E3\u53F7\u4E0D\u80FD\u4E0E\u865A\u62DF\u4E3B\u673A\u76D1\u542C\u7684\u7AEF\u53E3\u53F7\u4E00\u6837\uFF08\u4E5F\u5C31\u662Fserver\u76D1\u542C\u7684\u7AEF\u53E3\uFF09</span>
            proxy_redirect off<span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
             
            <span class="token comment">#\u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
             
            <span class="token comment">#\u4EE5\u4E0B\u662F\u4E00\u4E9B\u53CD\u5411\u4EE3\u7406\u7684\u914D\u7F6E\uFF0C\u53EF\u9009\u3002</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>

            <span class="token comment">#\u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u6587\u4EF6\u5B57\u8282\u6570</span>
            client_max_body_size 10m<span class="token punctuation">;</span>

            <span class="token comment">#\u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570\uFF0C</span>
            <span class="token comment">#\u5982\u679C\u628A\u5B83\u8BBE\u7F6E\u4E3A\u6BD4\u8F83\u5927\u7684\u6570\u503C\uFF0C\u4F8B\u5982256k\uFF0C\u90A3\u4E48\uFF0C\u65E0\u8BBA\u4F7F\u7528firefox\u8FD8\u662FIE\u6D4F\u89C8\u5668\uFF0C\u6765\u63D0\u4EA4\u4EFB\u610F\u5C0F\u4E8E256k\u7684\u56FE\u7247\uFF0C\u90FD\u5F88\u6B63\u5E38\u3002\u5982\u679C\u6CE8\u91CA\u8BE5\u6307\u4EE4\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u7684client_body_buffer_size\u8BBE\u7F6E\uFF0C\u4E5F\u5C31\u662F\u64CD\u4F5C\u7CFB\u7EDF\u9875\u9762\u5927\u5C0F\u7684\u4E24\u500D\uFF0C8k\u6216\u800516k\uFF0C\u95EE\u9898\u5C31\u51FA\u73B0\u4E86\u3002</span>
            <span class="token comment">#\u65E0\u8BBA\u4F7F\u7528firefox4.0\u8FD8\u662FIE8.0\uFF0C\u63D0\u4EA4\u4E00\u4E2A\u6BD4\u8F83\u5927\uFF0C200k\u5DE6\u53F3\u7684\u56FE\u7247\uFF0C\u90FD\u8FD4\u56DE500 Internal Server Error\u9519\u8BEF</span>
            client_body_buffer_size 128k<span class="token punctuation">;</span>

            <span class="token comment">#\u8868\u793A\u4F7Fnginx\u963B\u6B62HTTP\u5E94\u7B54\u4EE3\u7801\u4E3A400\u6216\u8005\u66F4\u9AD8\u7684\u5E94\u7B54\u3002</span>
            proxy_intercept_errors on<span class="token punctuation">;</span>

            <span class="token comment">#\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u95F4_\u53D1\u8D77\u63E1\u624B\u7B49\u5019\u54CD\u5E94\u8D85\u65F6\u65F6\u95F4</span>
            <span class="token comment">#nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)</span>
            proxy_connect_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4(\u4EE3\u7406\u53D1\u9001\u8D85\u65F6)</span>
            <span class="token comment">#\u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4_\u5C31\u662F\u5728\u89C4\u5B9A\u65F6\u95F4\u4E4B\u5185\u540E\u7AEF\u670D\u52A1\u5668\u5FC5\u987B\u4F20\u5B8C\u6240\u6709\u7684\u6570\u636E</span>
            proxy_send_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)</span>
            <span class="token comment">#\u8FDE\u63A5\u6210\u529F\u540E_\u7B49\u5019\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4_\u5176\u5B9E\u5DF2\u7ECF\u8FDB\u5165\u540E\u7AEF\u7684\u6392\u961F\u4E4B\u4E2D\u7B49\u5019\u5904\u7406\uFF08\u4E5F\u53EF\u4EE5\u8BF4\u662F\u540E\u7AEF\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42\u7684\u65F6\u95F4\uFF09</span>
            proxy_read_timeout <span class="token number">90</span><span class="token punctuation">;</span>

            <span class="token comment">#\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
            <span class="token comment">#\u8BBE\u7F6E\u4ECE\u88AB\u4EE3\u7406\u670D\u52A1\u5668\u8BFB\u53D6\u7684\u7B2C\u4E00\u90E8\u5206\u5E94\u7B54\u7684\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u8FD9\u90E8\u5206\u5E94\u7B54\u4E2D\u5305\u542B\u4E00\u4E2A\u5C0F\u7684\u5E94\u7B54\u5934\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD9\u4E2A\u503C\u7684\u5927\u5C0F\u4E3A\u6307\u4EE4proxy_buffers\u4E2D\u6307\u5B9A\u7684\u4E00\u4E2A\u7F13\u51B2\u533A\u7684\u5927\u5C0F\uFF0C\u4E0D\u8FC7\u53EF\u4EE5\u5C06\u5176\u8BBE\u7F6E\u4E3A\u66F4\u5C0F</span>
            proxy_buffer_size 4k<span class="token punctuation">;</span>

            <span class="token comment">#proxy_buffers\u7F13\u51B2\u533A\uFF0C\u7F51\u9875\u5E73\u5747\u572832k\u4EE5\u4E0B\u7684\u8BBE\u7F6E</span>
            <span class="token comment">#\u8BBE\u7F6E\u7528\u4E8E\u8BFB\u53D6\u5E94\u7B54\uFF08\u6765\u81EA\u88AB\u4EE3\u7406\u670D\u52A1\u5668\uFF09\u7684\u7F13\u51B2\u533A\u6570\u76EE\u548C\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E5F\u4E3A\u5206\u9875\u5927\u5C0F\uFF0C\u6839\u636E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4E0D\u540C\u53EF\u80FD\u662F4k\u6216\u80058k</span>
            proxy_buffers <span class="token number">4</span> 32k<span class="token punctuation">;</span>

            <span class="token comment">#\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09</span>
            proxy_busy_buffers_size 64k<span class="token punctuation">;</span>

            <span class="token comment">#\u8BBE\u7F6E\u5728\u5199\u5165proxy_temp_path\u65F6\u6570\u636E\u7684\u5927\u5C0F\uFF0C\u9884\u9632\u4E00\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B\u5728\u4F20\u9012\u6587\u4EF6\u65F6\u963B\u585E\u592A\u957F</span>
            <span class="token comment">#\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20</span>
            proxy_temp_file_write_size 64k<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">#\u672C\u5730\u52A8\u9759\u5206\u79BB\u53CD\u5411\u4EE3\u7406\u914D\u7F6E</span>
        <span class="token comment">#\u6240\u6709jsp\u7684\u9875\u9762\u5747\u4EA4\u7531tomcat\u6216resin\u5904\u7406</span>
        location ~ .<span class="token punctuation">(</span>jsp<span class="token operator">|</span>jspx<span class="token operator">|</span><span class="token keyword">do</span><span class="token punctuation">)</span>?$ <span class="token punctuation">{</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            proxy_pass http://127.0.0.1:8080<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br></div></div><h2 id="nginx\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#nginx\u4F18\u5316" aria-hidden="true">#</a> nginx\u4F18\u5316</h2><ul><li>Nginx\u5E38\u89C1\u7684\u4F18\u5316\u914D\u7F6E\u6709\u54EA\u4E9B? <ul><li>\u8C03\u6574worker_processes : \u6307Nginx\u8981\u751F\u6210\u7684worker\u6570\u91CF,\u6700\u4F73\u5B9E\u8DF5\u662F\u6BCF\u4E2ACPU\u8FD0\u884C1\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B</li><li>\u6700\u5927\u5316worker_connections :</li><li>\u542F\u7528Gzip\u538B\u7F29 : \u538B\u7F29\u6587\u4EF6\u5927\u5C0F\uFF0C\u51CF\u5C11\u4E86\u5BA2\u6237\u7AEFhttp\u7684\u4F20\u8F93\u5E26\u5BBD\uFF0C\u56E0\u6B64\u63D0\u9AD8\u4E86\u9875\u9762\u52A0\u8F7D\u901F\u5EA6</li><li>\u4E3A\u9759\u6001\u6587\u4EF6\u542F\u7528\u7F13\u5B58</li><li>\u7981\u7528access_logs : \u8BBF\u95EE\u65E5\u5FD7\u8BB0\u5F55\uFF0C\u5B83\u8BB0\u5F55\u6BCF\u4E2Anginx\u8BF7\u6C42\uFF0C\u56E0\u6B64\u6D88\u8017\u4E86\u5927\u91CFCPU\u8D44\u6E90\uFF0C\u4ECE\u800C\u964D\u4F4E\u4E86nginx\u6027\u80FD</li></ul></li></ul>`,26),b=n("p",null,"\u53C2\u8003\uFF1A",-1),m={href:"https://juejin.cn/post/6844904021552005127",target:"_blank",rel:"noopener noreferrer"},k=o("Nginx\u901A\u5173\u653B\u7565");function d(_,h){const s=e("ExternalLinkIcon");return p(),l(t,null,[u,n("blockquote",null,[b,n("p",null,[n("a",m,[k,c(s)])])])],64)}var f=a(i,[["render",d],["__file","NGINX-\u5165\u95E8\u6559\u7A0B.html.vue"]]);export{f as default};

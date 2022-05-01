# 前端懒加载如何做

## 什么是懒加载

**懒加载**是一种将资源标识为非阻塞（非关键）资源并仅在需要时加载它们的策略。 这是一种缩短[关键渲染路径](https://developer.mozilla.org/zh-CN/docs/Web/Performance/Critical_rendering_path)长度的方法，可以缩短页面加载时间。

简单来说，就是我们只为用户渲染用户当前浏览视图内的东西，视图之外的东西我们不做渲染。

## 懒加载怎么做
> 大部分需要引入资源的HTML标签都支持通过 `loading="lazy"` 属性使用懒加载

### 图片
```html
<img   
  src="bits.jpeg"   
  loading="lazy"   
  alt="an image of a laptop"   
/>
```

为什么要延迟加载图像或视频而不是直接加载?

-   它会浪费数据。如果不按流量计费，那么这并不是最糟糕的事情（尽管您可能会使用宝贵的带宽来下载用户确实会看到的其他资源）。然而，如果用户的连接使用计费流量，那么加载用户从未见过的内容就是在浪费他们的钱。
-   它会浪费处理时间、电池和其他系统资源。下载媒体资源后，浏览器必须对其进行解码并在视区中呈现其内容。

### iframe

```html
<iframe   
  src="about-page.html"   
  loading="lazy">  
</iframe>
```

### js
任何类型为 `type="module"` 的脚本标签都被视为一个 [JavaScript 模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)，并且默认情况下会被延迟。
```
<script src="./test.js" type="module" />
```

### 页面其他元素
**使用** IntersectionObserver API自动"观察"元素是否可见，来实现是否需要加载元素资源

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lazyload 3</title>
	<style>
	    img {
		display: block;
		margin-bottom: 50px;
		width: 800px;
	    }
    </style>
</head>
<body>
    <img src="images/loading.gif" data-src="images/1.png">
    <img src="images/loading.gif" data-src="images/2.png">
    <img src="images/loading.gif" data-src="images/3.png">
    <img src="images/loading.gif" data-src="images/4.png">
    <img src="images/loading.gif" data-src="images/5.png">
    <img src="images/loading.gif" data-src="images/6.png">
    <img src="images/loading.gif" data-src="images/7.png">
    <img src="images/loading.gif" data-src="images/8.png">
    <img src="images/loading.gif" data-src="images/9.png">
    <img src="images/loading.gif" data-src="images/10.png">
    <img src="images/loading.gif" data-src="images/11.png">
    <img src="images/loading.gif" data-src="images/12.png">
    <script>
	function query(selector) {
	    return Array.from(document.querySelectorAll(selector));
	}
	var io = new IntersectionObserver(function(items) {
	    items.forEach(function(item) {
		var target = item.target;
		if(target.getAttribute('src') == 'images/loading.gif') {
		    target.src = target.getAttribute('data-src');
		}
	    })
	});
	query('img').forEach(function(item) {
	    io.observe(item);
	});
    </script>
</body>
</html>
```

### React 中的懒加载
#### `React.lazy`

`React.lazy` 函数能让你像渲染常规组件一样处理动态引入（的组件）。
此代码将会在组件首次渲染时，自动导入包含 `OtherComponent` 组件的包。

`React.lazy` 接受一个函数，这个函数需要动态调用 `import()`。它必须返回一个 `Promise`，该 Promise 需要 resolve 一个 `default` export 的 React 组件。

然后应在 `Suspense` 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。

```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

### react-loadable
相比起`React.lazy`这种方式避免了一些问题：
1.  import失败
2.  服务端渲染
3.  loading过程显示其它组件
import()方法是用户调用的时候传入的，所以在react-loadable源码中甚至不存在import。

## 懒加载一定好吗？

### 滚动

这里和还真的需要打一个问号，因为懒加载在长页面中需要和页面的滚动事件绑定，这就导致在页面滚动的时候需要实时进行大量的运算和资源加载，可能会影响滚动的流畅性和滚动的速度。


### 内容变化
如果我们懒加载的时候不去指定图片定义的宽度和高度，那么在页面内容加载完成后再次去加载滚动到当前视图内的元素，往往会引起重绘和回流。


## 什么时候使用懒加载?

### 长页面

因为长页面需要一次性加载大量的内容，所以进行合理的代码分割和懒加载可以起到显著的作用。

### 不妨碍网页使用的内容

懒加载最好是用于不重要的非必需的 Web 资源。另外，如果资源没有像预期那样懒加载，那么不要忘记错误处理和提供良好的用户体验。请注意，原生懒加载依然没有被所有平台和浏览器普遍支持。

而且，如果你在使用一个库或者自定义的 JavaScript 脚本，那么这不会对所有用户都生效。尤其，那些禁止 JavaScript 的浏览器会面临懒加载技术上的问题。

### 懒加载对搜索引擎优化（SEO）而言不重要的资源

随着内容懒加载，网站将逐渐渲染，这也就是说，某些内容在首屏加载时并不可用。咋一听，好像是懒加载有助于提升 SEO 网页排名，因为它使页面加载速度大大加快。

但如果你过度使用懒加载，会产生一些负面影响。当 SEO 索引时，搜索引擎爬行网站抓取数据以便索引页面，但由于懒加载，网络爬虫无法获取所有页面数据。除非用户与页面进行互动，这样 SEO 就不会忽略这些信息。

但作为开发者，我们并不希望 SEO 遗漏我们重要的业务数据。所以我建议不要将懒加载用在针对 SEO 的内容上，比如关键词或者业务信息。

## 参考
- [# Lazy loading](https://developer.mozilla.org/zh-CN/docs/Web/Performance/Lazy_loading)
- [# 懒加载和预加载](https://juejin.cn/post/6844903614138286094)
- [# 懒加载居然对 Web 性能有负面影响 ？](https://mp.weixin.qq.com/s/9gYTABAg_IlmHRO9VBmeZA)
- [# 延迟加载(Lazyload)三种实现方式](https://zhuanlan.zhihu.com/p/25455672)

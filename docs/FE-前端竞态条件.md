# 前端竞态条件

## 什么是前端竞态条件

> 竞态条件旨在描述一个系统或者进程的输出依赖于不受控制的事件出现的顺序或者出现的时机。

通过上面的概念我们大概率可以猜到前端最常见的竞态条件便是与后端的请求交互过程，因为请求交互这一行为有其他不可完全确定的因素参与，所以说如何避免同一页面或同一应用发出的请求造成竞态条件导致页面收到影响便是我们需要讨论的话题。

## 怎么解决？

### 首先我们通过一个简单的例子来看看这个问题

```jsx
//以React为例
const AtriclePage = () => {

	const [detail, setDetail] = React.useState("");
	const [articleId, setArticleId] = React.useState("-1");

	React.useEffect(() => {

		fetch(`https://api/article/${articleId}`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				return Promise.reject();
			})
			.then((article) => {
				setDetail(article);
			});
	}, [articleId]);

	return (
	<React.Fragment>
		<div>{detail}</div>
	<div>
	<ul onClick={(e) => setArticleId(e.target.innerHTML)}>
			<ol>1</ol>
			<ol>2</ol>
			<ol>3</ol>
			<ol>4</ol>
	</ul>
	</div>
	</React.Fragment>
	);
};
```

在上面的例子中，我们创建了一个文章展示页面的组件，点击`ul`中的`ol`发起请求来展示文章的详情。在我们创建的`useEffect`中，当点击的文章ID(`articleId`)时，发起请求更新展示的文章详情。

#### 竞态条件出现场景

当我们出现类如下面的情况时，对于竞态信息的展示便会出现一些问题：
- 首先我们点击第一个
	- 网络请求发出
	- 结果未返回
- 然后我们点击第二个
	- 网络请求发出
	- 结果返回
- 然后我们点击第三个
	- 网络请求发出
	- 结果未返回
到此时，我们的组件状态信息其实是`articleId = 3`，`detail = article 2 detail`，也就是说，我们的状态没有及时更新，并且我们的请求数据结果被错误的使用，这也就是所谓的竞态条件问题。

#### 如何解决竞态条件带来的影响
- 中断进程：这里主要是使用`abortController`来放弃我们之前的请求进程。
- 忽略结果：比如当结果三和结果一返回时，我们判断哪个和当前的`articleId`相同来确定渲染逻辑，这里比较通用的`CancelToken`的技术方案，但是本质上这是一种投机的方案。

#### 具体使用

#### AbortController
```jsx
useEffect(() => {  
	const abortController = new AbortController();   
	fetch(`https://api/article/${articleId}`, {  
		signal: abortController.signal,  
	})  
	.then((response) => {  
		if (response.ok) {  
		return response.json();  
		}  
		return Promise.reject();  
	})  
	.then((fetchedArticle) => {  
		setDetail(fetchedArticle);  
	})  
	.catch(() => {  
	     if (abortController.signal.aborted) {  
	       console.log('The user aborted the request');  
	     } else {  
	       console.error('The request failed');  
	     }  
	   })
  
	return () => {  
		abortController.abort();  
	};  
}, [articleId]);
```

#### CancelToken
```jsx
useEffect(() => {  
 let didCancel = false;  
    
 fetch(`https://api/article/${articleId}`)
	.then((response) => {
			if (response.ok) {
				return response.json();
			}
		return Promise.reject();
	})
   .then((fetchedArticle) => {  
     if (!didCancel) {  
       setDetail(fetchedArticle);  
     }  
   })    
  
 return () => {  
   didCancel = true;  
 }  
}, [articleId]);
```


## 参考
- [# 解决前端常见问题：竞态条件](https://mp.weixin.qq.com/s/GryL1QVARtMB8-WIzd7xQQ)
- [# JavaScript网络请求](https://www.thisjs.com/2020/11/04/javascript-web-request-a-race-condition-problem/)
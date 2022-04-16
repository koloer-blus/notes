# 打通JS事件循环机制

<iframe width="560" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ" title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# 打通JS事件循环机制

> 在了解事件循环机制之前，我们先聊下`javascript`的运行机制以及对应的原因

## 为什么JavaScrip是单线程
因为JS的主要作用是和用户互动，在前端的`javascript`操作`dom`时，并不会像后端一样通过锁或者其他的方式来保证这种彼此影响的操作的先后顺序，所以**为了避免复杂性和确保对于`Dom`操作的唯一性，使用单线程是一个利大于弊的方案。**

### 那么web worker呢？这不是一种支持多线程的方案吗？

首先需要明确一点，在worker内，不能直接操作DOM节点，也不能使用[`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)对象的默认方法和属性。并且这种方案允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制。

## EventLoop（事件循环机制）

> 下面的代码以及对应的展示都是来自于：
> [loupe 代码运行可视化环境](http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coMSk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7CiAgICBjb25zb2xlLmxvZygyKQp9LDIwMDApOwoKbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSl7CiAgICBjb25zb2xlLmxvZygzKTsKICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspewogICAgICAgIGkgPT0gMiAmJiByZXNvbHZlKCk7CiAgICB9Cn0pLnRoZW4oZnVuY3Rpb24oKXsKICAgIGNvbnNvbGUubG9nKDQpCn0pOwoKY29uc29sZS5sb2coNSk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

首先我们利用(Philip Roberts演讲中的)图片来展示整个浏览器`EventLoop`的过程：
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b872cf45e8944b6f996222d33b85cc30~tplv-k3u1fbpfcp-zoom-1.image)
在主线程运行的过程中，会主要使用到`V8`引擎的两个组件，也就是上面的内存堆(heap)和调用栈(stack)：
- 内存堆：这是内存分配发生的地方，也就是我们变量等等这些东西分配的地方；
- 调用栈： 这是在你代码执行时栈帧存放的位置，因为是栈，所以它一次制作一件事。更详细点说，调用栈记录的就是我们的程序所处的位置。栈中的代码调用各种外部API。

那么上面的`callback queue`呢？其实这里对应的原本意思是回调队列，但是我们为了便于理解，通常称它为**任务队列**，在这里去执行我们的异步任务。

### 借用代码分析

比如我有下面的代码，我们来一点点分析事件循环机制的整体运行过程：

```javascript
console.log(1);

setTimeout(function(){
    console.log(2)
},2000);

new Promise(function(resolve){
    console.log(3);
    for(let i = 0; i < 3; i++){
        i == 2 && resolve();
    }
}).then(function(){
    console.log(4)
});

console.log(5);
```

首先猜一猜上面代码的执行顺序，如果不存在事件循环机制，那么结果就应该是：
```
1 2 3 4 5
```
但是这样的话如果我们的定时器事件更长一点，那么是不是意味着我们的Promise和后面的`console.log(5)`这些原本不需要等待的事件也要等待着200ms呢？这样的话，就造成了加载`javascript`导致的页面阻塞了。

所以我们在这里需要引入事件循环机制：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/647254a72c9242a38509e7803ebbf4d9~tplv-k3u1fbpfcp-watermark.image?)

首先执行`console.log(1)`,将其压入执行栈中，因为不存在调用`webApi`和异步的情况，所以我们直接输出。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba317a18c03c4717904baf0c19aba49c~tplv-k3u1fbpfcp-watermark.image?)

然后继续向下执行，我们向执行栈中压入定时器。定时器作为一种延期执行或者定向执行，如果我们在这里等待的话会影响到我们的代码正常执行，所以我们将它放入任务队列中（下图中的`anonymous()`代表定时器）：


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f1ed5a6497d428e9dda5f61f957f12a~tplv-k3u1fbpfcp-watermark.image?)

紧接着我们继续执行，来到`Promise`这一部分，这里需要注意的是：只有`Promise.then`属于微任务（异步任务），`new Promise`本身回调函数中的代码依然是同步执行：


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/accce8fdfff64706b1a545647f990518~tplv-k3u1fbpfcp-watermark.image?)

这里我们先执行`console.log(3)`,然后我们顺序执行循环中的代码：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b18b3e480d464609809edb9633c10ade~tplv-k3u1fbpfcp-watermark.image?)

然后循环过程中当`i == 2`时执行`resolve()`函数


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2381b5958e144517a7cb6e03f9ff5d66~tplv-k3u1fbpfcp-watermark.image?)

然后`new Promise`的部分执行结束。然后就有好多同学产生疑问了，后面的`.then`去哪了，实际上`.then`是属于宏任务下的**微任务队列**，也就是我们**整体代码的微任务队列**，那么微任务队列会在什么时候执行呢？

当前的宏任务执行完毕后，因为宏任务队列只有一个，而每一个宏任务都有一个自己的微任务队列，然后回去循环当前宏任务对应的微任务队列。

然后我们执行`console.log(5)`：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed2b9858d90346349d0360506c2f0511~tplv-k3u1fbpfcp-watermark.image?)


到上面执行完`console.log(5)`之后，我们的整体代码的宏任务队列就执行完毕了。目前我们的宏任务队列和微任务队列状态是(此时我们模拟的是将要结束`script`宏任务结束的状态)：

```javascript
[
    script：{
        miscTask: [
           x.then(function(){
            console.log(4)
            }),
        ]
    },
    setTimeout: {
        miscTask: [
            function(){
                console.log(2)
            }
        ]
    }
]
```

然后我们执行我们的`.then`函数：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd67bc16cc1a4ace83a9d6b21481c584~tplv-k3u1fbpfcp-watermark.image?)

到了这里其实并没有结束，因为我们的`setTimeout(() => {...}, 2000)`还在我们的任务队列中，然后我们去将回调函数放入我们的执行栈中执行:

> setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行。它在"任务队列"的尾部添加一个事件，因此要等到同步任务和"任务队列"现有的事件都处理完，才会得到执行。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bcd79df53fd4986b5e69b9e57f10fa2~tplv-k3u1fbpfcp-watermark.image?)

然后我们进入执行栈中去执行对应的定时函数和`console`，同时`setTimeout`属于`window`下的定时器，因此也会调用webApi:

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c70f033841524bd899422d8e21723be8~tplv-k3u1fbpfcp-watermark.image?)

所以最终的结果是：

```
1 3 5 4 2
```

所以什么是事件循环机制呢？
- 浏览器的事件循环由一个宏任务队列+多个微任务队列组成。
- 产生的的宏任务和微任务进入各自的队列中。执行完 Script 后，把当前的微任务队列清空。完成一次事件循环。
- 接着再取出一个宏任务，同样把在此期间产生的回调入队。再把当前的微任务队列清空。以此往复。
- 宏任务队列只有一个，而每一个宏任务都有一个自己的微任务队列，每轮循环都是由一个宏任务+多个微任务组成。


## 常见任务分类

### 常见的宏任务

- script（整体代码）
- setTimout
- setInterval
- setImmediate(node 独有)
- requestAnimationFrame(浏览器独有)
- IO
- UI render（浏览器独有）

### 常见的微任务

- process.nextTick(node 独有)
- Promise.then()
- Object.observe
- MutationObserver

### 为什么要有宏任务和微任务？
为了协调事件、用户交互、脚本、渲染、网络等，用户代理必须使用本节中描述的事件循环。每个[代理](https://tc39.es/ecma262/#sec-agents)都有一个关联的事件循环，这是该代理独有的。事件循环中的任务被分为宏任务和微任务，是为了给高优先级任务一个插队的机会：微任务比宏任务有更高优先级。

## 参考
- [# 事件循环：微任务和宏任务](https://zh.javascript.info/event-loop)
- [# 阿里一面：熟悉事件循环？那谈谈为什么会分为宏任务和微任务。](https://mp.weixin.qq.com/s/FzlZOPyjjd9RpBumT7V9RA)
- [# 熟悉事件循环？那谈谈为什么会分为宏任务和微任务。](https://mp.weixin.qq.com/s/-cHJa8k3Mk7jtYzKeZlj-w)
- [# Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
- [# Loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
- [# JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
- [# 解读 JavaScript 之引擎、运行时和堆栈调用](https://www.oschina.net/translate/how-does-javascript-actually-work-part-1)
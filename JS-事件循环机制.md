# 事件循环机制
[同源窗口代理](https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent)的[事件](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop)循环称为窗口事件循环。[专用工作者代理](https://html.spec.whatwg.org/multipage/webappapis.html#dedicated-worker-agent)、 [共享工作者代理](https://html.spec.whatwg.org/multipage/webappapis.html#shared-worker-agent)或[服务工作者代理](https://html.spec.whatwg.org/multipage/webappapis.html#service-worker-agent)的[事件](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop)循环称为工作者事件循环。工作 [集代理](https://html.spec.whatwg.org/multipage/webappapis.html#worklet-agent)的[事件循环](https://html.spec.whatwg.org/multipage/webappapis.html#concept-agent-event-loop)称为工作集事件循环。

> `javascript`是单线程的，在一个时间点下`JS`引擎只能处理一件事。

一个[事件循环](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)有一个或多个任务队列。任务[队列](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue)是一 [组](https://infra.spec.whatwg.org/#ordered-set)[任务](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task)。

>[任务队列](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue)是[集合](https://infra.spec.whatwg.org/#ordered-set)，而不是[队列](https://infra.spec.whatwg.org/#queue)，因为[事件循环处理模型的第一步是](https://html.spec.whatwg.org/multipage/webappapis.html#step1)从所选队列中获取第一个可运行的任务，而不是让[_第_](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task-runnable) [一个任务](https://html.spec.whatwg.org/multipage/webappapis.html#concept-task)[出队](https://infra.spec.whatwg.org/#queue-dequeue)。

**并非所有事件都使用[任务队列](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue)进行调度；许多在其他任务期间被派遣。**

`js`任务分为**同步任务**和**异步任务**两种。这里的同步和异步不同于我们普通观念中的同步和异步：

- 同步：连贯完成一个任务。
- 异步：将任务进行分段，然后利用回调的过程来循环交替执行任务。

在异步任务准备的同时，`JS`引擎去执行其他同步任务，等到异步任务准备好了，再去执行回调。
<img src="https://zh.javascript.info/article/event-loop/eventLoop.svg" alt="" width="479" height="279">
实现这个操作事件执行时机的是**事件循环**，由一个队列组成，异步任务的回调遵循先进先出，在`JS`引擎空闲时会被循环取出。
1.  引擎执行任务时永远不会进行渲染（render）。如果任务执行需要很长一段时间也没关系。仅在任务完成后才会绘制对 DOM 的更改。
2.  如果一项任务执行花费的时间过长，浏览器将无法执行其他任务，例如处理用户事件。因此，在一定时间后，浏览器会抛出一个如“页面未响应”之类的警报，建议你终止这个任务。这种情况常发生在有大量复杂的计算或导致死循环的程序错误时。
### 事件循环算法
1.  从 **宏任务** 队列（例如 “script”）中出队（dequeue）并执行最早的任务。
2.  执行所有 **微任务**：
    -   当微任务队列非空时：
        -   出队（dequeue）并执行最早的微任务。
3.  如果有变更，则将变更渲染出来。
4.  如果宏任务队列为空，则休眠直到出现宏任务。
5.  转到步骤 1。

## 宏任务和微任务

在任务队列中主要由宏任务和微任务两大类。

宏任务和微任务交替执行，形成了一个紧急任务的插队机制。 

> `setTimeout`：
>
> 如果事件到了，但是`JS`引擎还是在执行同步任务，这个回调需要等待；如果当前的事件循环的队列里有其他的回调，需要等其他的回调执行完。
>
> 多个嵌套的 `setTimeout` 调用在浏览器中的最小延迟为 4ms。即使我们设置了 `0`，但还是 `4ms`（或者更久一些）

**每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务，或渲染，或进行其他任何操作。**
<img src="  
https://zh.javascript.info/article/event-loop/eventLoop-full.svg"  alt="" width="407" height="391">
微任务会在执行任何其他事件处理，或渲染，或执行任何其他宏任务之前完成。

这很重要，因为它确保了微任务之间的应用程序环境基本相同（没有鼠标坐标更改，没有新的网络数据等）。

#### 常见的宏任务
- script（整体代码）
- setTimout
- setInterval
- setImmediate(node 独有)
- requestAnimationFrame(浏览器独有)
- IO
- UI render（浏览器独有）

#### 常见的微任务
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
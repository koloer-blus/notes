# EventLoop

> Event Loop即事件循环，是浏览器或Node解决单线程运行时不会阻塞的一种机制。

## 浏览器线程

1. GUI渲染线程

- 绘制页面，解析HTML、CSS，构建DOM树等
- 页面的重绘和重排
- 与JS引擎互斥(JS引擎阻塞页面刷新)

2. JS引擎线程

- js脚本代码执行
- 负责执行准备好的事件，例如定时器计时结束或异步请求成功且正确返回
与GUI渲染线程互斥

3. 事件触发线程

- 当对应的事件满足触发条件，将事件添加到js的任务队列末尾
- 多个事件加入任务队列需要排队等待

4. 定时器触发线程

- 负责执行异步的定时器类事件：setTimeout、setInterval等
- 浏览器定时计时由该线程完成，计时完毕后将事件添加至任务队列队尾

5. HTTP请求线程

- 负责异步请求
- 当监听到异步请求状态变更时，如果存在回调函数，该线程会将回调函数加入到任务队列队尾

## 同步与异步执行顺序

1. JavaScript将任务分为同步任务和异步任务，同步任务进入主线中中，异步任务首先到Event Table进行回调函数注册。
2. 当异步任务的触发条件满足，将回调函数从Event Table压入Event Queue中。
3. 主线程里面的同步任务执行完毕，系统会去Event Queue中读取异步的回调函数。
4. 只要主线程空了，就会去Event Queue读取回调函数，这个过程被称为Event Loop。

**JavaScript除了广义上将任务划分为同步任务和异步任务，还对异步任务进行了更精细的划分。异步任务又进一步分为微任务和宏任务。**

![](https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTGOrlPicX20J8JYBfoF8vxS4icVOl2ls6B6loSPMxTicOyQh54QPFLibU5Hxs8eBHtpLWE8UwzxAw0Rg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

宏任务和微任务分别有各自的任务队列Event Queue，即宏任务队列和微任务队列。

了解到宏任务与微任务过后，我们来学习宏任务与微任务的执行顺序。

1. 代码开始执行，创建一个全局调用栈，script作为宏任务执行
2. 执行过程过同步任务立即执行，异步任务根据异步任务类型分别注册到微任务队列和宏任务队列
3. 同步任务执行完毕，查看微任务队列
4. 若存在微任务，将微任务队列全部执行(包括执行微任务过程中产生的新微任务)
5. 若无微任务，查看宏任务队列，执行第一个宏任务，宏任务执行完毕，查看微任务队列，重复上述操作，直至宏任务队列为空
更新一下Event Loop的执行顺序图：

![](https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTGOrlPicX20J8JYBfoF8vxS5BXvtaVaFryoFKicw1egMibEicsfN6SuRosxCib1j1NblgboWcBwcpldwg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
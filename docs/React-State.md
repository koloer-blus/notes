# state

> 老规矩，我们需要思考为什么要用state？
> 
> state 的主要作用是用于组件保存、控制、修改自己的可变状态。state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。（**state 是私有的，并且完全受控于当前组件，是让组件控制自己的状态**）

## 向class组件中添加**局部**的state

> 这里官方文档的用词不得不说非常的细致，“局部”两个字非常有深意，不知道你注意到了吗？

官方代码如下：

```javascript
class Clock extends React.Component {
  constructor(props) {
    //这部分是es6的知识，不了解的小伙伴可以去看一下es6入门或者冴羽老师的博客
    //这里官方有句概括性很强的话：
    //Class 组件应该始终使用 props 参数来调用父类的构造函数
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

## setState

首先需要明确的是setState的异步并不是内部代码的异步，setState本身和代码的执行过程同步，只是在部分事件和情况下因为调用事件本身执行顺序和event loop的原因导致的一些问题，要想避免在无论什么时候都可以实时得到state中的值最好的办法就是获取使用它的第二个参数回调函数。

> 关于state我们这里需要讲一讲setState，首先需要清楚，setState不是绝对的同步，但也不是绝对的异步，因为这里有几种情况要和大家说道说道：

### 合成事件(异步)

在React中的onClick、onBlur、onChange这类事件都是合成事件，在这类事件中有一个`try...finally...`的模块，就是先执行try中的模块然后执行finally中的模块，在try中首先会进行获取到你的值，但是并不会更新，在finally中更新state并且渲染UI。

### 生命周期函数(异步)

和合成事件是差不多的，但是在生命周期执行过程中并不会进行更新，而是执行结束后才开始去做数据的更新。

### 原生事件(同步)

当你使用原生事件时避开了jsx提供的那一套合成函数的封装和内部逻辑，所以就使得你可以同步拿到更新后的值。

### setTimeout(同步)

基于Event Loop提供的好处，当你在setTimeout中使用setState时，首先会将setTimeout放到队列中，然后去执行其中`finally`的部分，也就是跳过了内部的第一层判断从而避开了对setState进行异步处理的操作。

### setState(批量覆盖)

```javascript
state = {count: 0}
setState({count: this.state.count + 1})
setState({count: this.state.count + 1})
setState({count: this.state.count + 1})
setState({count: this.state.count + 1})
```

在上面的代码中，最终结果只是1，因为在批量操作中setState会对重复相同操作覆盖，如果时多个不相同的操作则就官方文档中的合并。
## 生命周期(先搞懂为啥)

> 1.在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。（原因在这里）
> 
> 2.便于在运行过程中特定的阶段执行这些方法

直接上大图

![官方声明周期图](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96d28a0858eb4e5188cee0e637315e42~tplv-k3u1fbpfcp-watermark.image)
### 官方的流程(这里我们只看生命周期图中的生命周期)

> 如果你对React的生命周期有所了解或者十分熟悉，你可以对下面的内容进行快速阅读，如果你没有确切的概念和对一些生命周期函数不清楚，我还是建议你对下面内容进行阅读并且参考生命周期图进行思考。

- `constructor()`(初始化)
  - 进行state初始化和函数的this的绑定
  - **注意**：任何复杂的操作包括setState都不应该出现在该函数中
- `static getDerivedStateFromProps(props, state)`（state 的值在任何时候都取决于 props时使用）
  - **会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用**。
    - 该函数应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
    - **此方法无权访问组件实例。**
- `shouldComponentUpdate(nextProps, nextState)`(用于控制state的改变是否应该进行重新渲染)
  - 渲染之前被执行通过返回值的true或false来判断是否进行重新渲染。
  - 请勿在此进行任何复杂的比较和操作，因为这会造成严重的性能损伤。
- `render`(返回应当渲染的元素的纯函数)
  - 当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一
    - 由JSX创建的React元素
    - 数组或 fragments。
- `componentDidMount()` 在组件挂载也就是插入DOM树后调用
  - 在这里比较适合添加一些复杂功能，比如发布订阅和ajax请求，但是相对的，在这里进行state的初始化时会触发额外的渲染。
- `getSnapshotBeforeUpdate()`(获取快照)
  - 需要注意的是该函数并不会在挂载时执行，而只是在最近一次渲染输出（提交到 DOM 节点）之前调用(也就是render将元素转为React元素后到在页面上呈现出来的过程之间调用)，**这是属于更新时调用的函数**。
- `componentDidUpdate(prevProps, prevState, snapshot)`(更新后立刻被调用)
  - 首次渲染不执行更新后会被立即调用。
  - `你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。不要将 props “镜像”给 state，请考虑直接使用 props。           --React官方文档`
  - 这里导致的死循环和props赋值带来的组件性能的影响往往是致命的，可能你没遇到这样的情况，但当你使用过hook之后你想进行ajax数据请求的时候就有很大可能出现这一问题。
- `componentWillUnmount()`组件卸载和销毁时
  - 这里往往需要做一些收尾工作，比如清除timer和取消网络请求
  - 切记：在这里不要调用setState()

### 梳理一下我们可以理解的生命周期流程

上面的内容可能看的你有些烦躁，但是如果你对上面的内容有所了解后，接下里便轻松多了：

![生命周期图](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fb98edc760a43bfbf5e379650ba8cf5~tplv-k3u1fbpfcp-watermark.image)

看到这里，对于生命周期，你是否有所了解了呢？


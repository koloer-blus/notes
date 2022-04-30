# 函数式组件？
往往我们区分函数式组件与类组件的方式只是通过`hooks`以及生命周期函数来判断，那么除了这两个明显的区别外，函数式组件与类组件还有什么明显的区别吗？

## 函数组件与类组件

### 基础概念：
- **函数式组件**：接收唯一带有数据的 `props`（代表属性）对象与并返回一个 `React` 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 的**纯函数**。
- **类组件**：类组件相对于函数式组件来说，使用`ES6`的`Class`写法，通过继承`React.Component`来得到`React`组件相关的`api`以及对应的生命周期函数，并且在`render`方法中返回一个`React`元素，这中类型的组件也就是类组件。

### 具体差异
- 函数式组件相比起`class`组件，缺少了`this`的处理，并且不会被实例化，意味着每一次组件更新都是重新执行一遍这个函数组件。
- 类组件的设计思想使用**面向对象的编程**，灵活使用面向对象的继承、封装、多态等思想实现组件的功能和状态管理。
- 函数式组件则使用**函数式编程**，确定输入和输出存在特定的映射关系，确保输入和输出的必然确定关系，相比起类组件，函数式组件更注重于一个组件只做一件事。

## 为什么使用函数式组件？

### 更好的逻辑复用
这个基本上是`vue`和`react`推出函数式组件最基本的原因了，很难想象如果你有大量的逻辑和复杂
的请求过程，在类组件中完成这样的功能看起来像是打了无数个死结。

### 捕获函数的`props`以及`state`（需要实时的`props`或者`state`）
>这句话来自`Dan`的文章【# 函数式组件与类组件有何不同？】，可以详见参考部分

这里其实可以这样理解，**在函数式组件中，每一次`props`更新都会执行函数式组件，意味着所有的`props`和`state`的最新值都会被捕获到，而相比`class`组件，只会在每次执行`render`函数，意味着当我们存在一些异步或者定时操作时，我们拿到的其实是发起这个任务时的`props`**。
这里可能不方便理解，我们来通过`Dan`给的代码来细细体会下：

<iframe src="https://codesandbox.io/embed/pjqnl16lm7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="pjqnl16lm7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

上面的代码你可能看不出什么问题，尝试按照以下顺序来分别使用这两个按钮：

1.  **点击** 其中某一个 Follow 按钮。
2.  在3秒内 **切换** 选中的账号。
3.  **查看** 弹出的文本。

我们会发现类组件显示的是我们3s前选择的那个人的姓名，而不是我们最新的人。

```jsx
class ProfilePage extends React.Component {
  render() {
    // Capture the props!    const props = this.props;
    // Note: we are *inside render*.
    // These aren't class methods.
    const showMessage = () => {
      alert('Followed ' + props.user);    };

    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };

    return <button onClick={handleClick}>Follow</button>;
  }
}
```


### 更利于代码拆分
这里就比较容易理解了，函数式的组合相比起类的组合，不仅更灵活，就连使用上也有更多可选择的方式。

### 更利于类型推导

这里不得不提一下`typescript`在现在的前端编程中的重要性。函数式编程在类型定义和推导上更方便，同时也更利于我们去处理对应的问题。

可以参考:[# 使用 PropTypes 进行类型检查](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#function-components)

## Q&A
### 为什么使用类组件？
1. 使用类组件自带的面向对象的特性以及粒度更细的生命周期函数来进行组件的状态控制。
2. 使用类组件往往是继承的好处大于我们组合的方式，并且需要更细粒度的进行组件的控制。
### 两种组件写法哪种更好？
这个问题其实是一个比较宽泛的问题，对于这个问题我们需要去了解两个组件的特点以及自己需要完成功能的技术方案是否契合，相比起说去定义哪一个组件更好，只能说每一个组件有自己的适用场景。

当然相比起我个人的见解，在`React`官方的文档以及社区中，更主推的是函数式组件，更倾向于使用`hooks`解决问题，他们也给出对应的原因：
- 类组件的`this`是很多人搞不清楚的地方，包括对于事件的绑定机制和一些`this`本身的机制。
- 使用类组件不利于采用组合的方式来实现整体的功能，组件的拆分往往会波及父组件或者层级更高的组件
- 大多数类组件的使用者不能很好的处理逻辑代码在生命周期函数中的使用方式。

最终我觉得在`Vue`官方中其实给出了更完整的结论，我这里`copy`过来，加入一些修改来供大家参考：

首先，这两种风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。关于 React 的基础概念和知识在它们之间都是通用的。

类组件以“组件实例”的概念为中心 (即上述例子中的 `this`)，对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。同时，它将响应性相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。

函数式组件的核心思想是直接在函数作用域内定义响应式状态变量，并将从多个函数中得到的状态组合起来处理复杂问题。这种形式更加自由，也需要你对 React 的系统有更深的理解才能高效使用。相应的，它的灵活性也使得组织和重用逻辑的模式变得更加强大。

如果你是使用 React 的新手，这里是我们总结的推荐：

-   出于学习目的使用时，我们推荐你采用自己更容易理解的方式。再强调一下，这两种风格的核心概念是通用的。一旦你熟悉了其中一种，另一种也无师自通。
-   出于生产目的使用时
    -   如果你不需要使用构建工具，或者只在低复杂度的场景中使用 React，可以采用类组件，例如需要渐进式集成的时候。
    -   当你想用 react 构建更大更完整的应用时，推荐使用函数式组件。
你不必在学习阶段就确定自己非要使用哪一种风格。


## 参考
- [# React State & 生命周期](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html)
- [# 我搞懂了 React 的函数组件](https://mp.weixin.qq.com/s/cCwXaqvYwLd8CD7-eLP70Q)
- [# 函数式组件与类组件有何不同？](https://overreacted.io/zh-hans/how-are-function-components-different-from-classes/)
- [# Vue.js](https://staging-cn.vuejs.org/guide/introduction.html)
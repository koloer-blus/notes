# React中如何更好的使用MobX
在之前的文章中我们讲解了`MobX`的基本使用以及`MobX`的一些特点。本篇文章将结合`React`讲解如何在`React`中更好的使用`MobX`。

## 关于`React` MobX集成选择

`MobX`本身是可以独立于`React`执行，并且很多内容可以自主选择。在这里可以选择`mobx-react`和`mobx-react-lite`两个包。`mobx-react-lite`更加轻量，但是它只支持`React`函数式组件。

## 如何管理我们的`state`

### props使用
在我们定义了一个外部的`Observable` State后，我们除了直接使用（全局变量）外，我们还可以通过使用`React`组件参数传递来实现我们的功能。
```jsx
const myTimer = new Timer() // See the Timer definition above.  
  
const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>)  
  
// 通过props传递myTimer.  
const TimerApp = () => <TimerView timer={myTimer} />
```

### 结合`Context`使用
既然这是一种状态，那么当我们需要全局管理或者跨层传递使用时，使用`React Context`是一种更好的选择。我们可以将我们的`Observable`State作为`context`。
```jsx
const TimerContext = createContext<Timer>()  
  
const TimerView = observer(() => {  
// 从context中获取timer.  
const timer = useContext(TimerContext) // 可以在上面查看 Timer的定义。  
	return (  
		<span>Seconds passed: {timer.secondsPassed}</span>  
	)  
})  
  
const TimerApp = () => (  
<TimerContext.Provider value={new Timer()}>  
	<TimerView />  
</TimerContext.Provider>
)
```

### 使用`useLocalObservable`
通过使用`useLocalObservable`可以为我们实现`const [store] = useState(() => observable({ /* something */}))`这样的功能。
```jsx
const TimerView = observer(() => {  
const timer = useLocalObservable(() => ({  
		secondsPassed: 0,  
		increaseTimer() {  
			this.secondsPassed++  
		}  
	}))  
	return <span>Seconds passed: {timer.secondsPassed}</span>  
})
```

## 注意
- `observer` 会自动的使用 `memo`, 所以 `observer` 不需要再包裹 `memo`。 `memo` 会被 observer 组件安全的使用，因为任何在props中的改变(很深的) 都会被`observer`响应。
- 晚一点使用间接引用值。推荐尽可能晚的使用间接引用值。 这是因为当使用 observable 间接引用值时 MobX 会自动重新渲染组件。 如果间接引用值发生在组件树的层级越深，那么需要重新渲染的组件就越少。
- 不要使用数组的索引作为 key

## 参考
- [# 集成React（react-integration）](https://zh.mobx.js.org/react-integration.html)
- [# React 优化 {🚀}](https://zh.mobx.js.org/react-optimizations.html)

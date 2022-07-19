# MobX

## 什么是`MobX`
`MobX`是一种简单、可拓展的状态管理方案。虽然`MobX`本身是一个独立的库，但是就像豆浆和油条一样，他也没有想到自由有一天和`React`会如此契合。

### 核心理念
**确保从应用状态中派生出的一切都将被自动派生出来。**
![](https://zh.mobx.js.org/assets/getting-started-assets/overview.png)

- State：`MobX`通过`State`来驱动应用程序的数据，并且**确保可以被改变的属性都被标记为`observale`**，当然了，前提是你需要`MobX`跟踪他们并产生对应的化学反应。
- Action：主要作用于改变State。**Action主要作用于帮助我们更好的组织代码，避免因为一些副作用函数导致的state篡改**。
- Derivations：可以理解为一些触发反应。在这里主要分为两种：
	- computed Value：有点像`Vue`中的`Computed`或者是`React`中的`useMemo`，主要是期望返回一些简单的计算值。
	- Reactions：这里主要是用于处理一些可能会影响`Dom`更新的操作。（Reactions咋子合理并不需要产生某个结果，而是通过产生副作用来完成我们的功能）

那么`MobX`是怎么做到的呢？
`MobX`使用单项数据流，action改变state，进而触发所有的操作。
![](https://zh.mobx.js.org/assets/action-state-view.png)
- 所有的derivations在state变化时**自动且原子化更新**，换句话说，他更重要的是观察最终的结果变化而非过程中值的变化。
- derivations**默认同步更新**，这将确保我们的action可以安全的获得state改变的值
- computed value的更新是惰性的，任何computed value不会在副作用发生之前被激活
- 应该始终确保computed value没有副作用（也就是确保其为纯函数），不应该使他们影响state或者其他内容。
下面的Demo使用`MobX`完成对应的功能[CodeBox](https://codesandbox.io/embed/gracious-dream-9bbmpn?fontsize=14&hidenavigation=1&theme=dark)：

<iframe src="https://codesandbox.io/embed/gracious-dream-9bbmpn?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="gracious-dream-9bbmpn"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 核心内容

### Observable State

#### 创建一个可观察对象

##### 手动绑定（`makeObservable`）
使用`makeObservable`手动绑定注解：
-   `observable` 定义一个存储 state 的可追踪字段。
-   `action` 将一个方法标记为可以修改 state 的 action。
-   `computed` 标记一个可以由 state 派生出新的值并且缓存其输出的 getter。

##### 自动绑定(`makeAutoObservable`)
用于帮助你推断所有的属性，维护也更简单。
-   所有 _自有_ 属性都成为 `observable`。
-   所有 `get`ters 都成为 `computed`。
-   所有 `set`ters 都成为 `action`。
-   所有 _prototype 中的 functions_ 都成为 `autoAction`。
-   所有 _prototype 中的 generator functions_ 都成为 `flow`。（需要注意，generators 函数在某些编译器配置中无法被检测到，如果 flow 没有正常运行，请务必明确地指定 `flow` 注解。）
-   在 `overrides` 参数中标记为 `false` 的成员将不会被添加注解。例如，将其用于像标识符这样的只读字段。

### Action
action 就是任意一段修改 state 的代码。原则上，actions 总会为了对一个事件做出响应而发生。
-   `action` _（注解）_
-   `action(fn)`
-   `action(name, fn)`

`action` 不仅仅是一个注解，更是一个高阶函数。可以使用函数将它作为一个参数来调用，在这种情况下它将会返回一个有着相同签名的使用 `action` 包装过的函数。

### computeds
计算值采用惰性求值，会缓存其输出，并且只有当其依赖的可观察对象被改变时才会重新计算。 它们在不被任何值观察时会被暂时停用。
-   `computed` _（注解）_
-   `computed(options)` _（注解）_
-   `computed(fn, options?)`

### reactions
reactions 的目的是对自动发生的副作用进行建模。 它们的意义在于为你的可观察状态创建消费者，以及每当_关联_的值发生变化时，_自动_运行副作用。

#### AutoRun
- `autorun(effect: (reaction) => void)`
Autorun 通过在_响应式上下文_运行 `effect` 来工作。在给定的函数执行期间，MobX 会持续跟踪被 effect 直接或间接_读取_过的所有可观察对象和计算值。 一旦函数执行完毕，MobX 将收集并订阅所有被读取过的可观察对象，并等待其中任意一个再次发生改变。 一旦有改变发生，`autorun` 将会再次触发，重复整个过程。
![](https://zh.mobx.js.org/assets/autorun.png)

#### Reaction
-  `reaction(() => value, (value, previousValue, reaction) => { sideEffect }, options?)`.
reaction会将参数的第一个 data 函数返回值作为第二个参数effect函数的输入值。
与 `autorun` 不同，副作用在初始化时不会自动运行，而只会在 data 表达式首次返回新值之后运行。

## 参考
- [# MobX 主旨](https://zh.mobx.js.org/the-gist-of-mobx.html)

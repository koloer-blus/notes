# Formily 指南
## 什么是`Formily`
`Formily`是用于解决复杂表单交互逻辑以及数据处理的前端表单高性能技术方案。
那么为什么说`Formily`是高性能的表单方案呢？怎么体现呢？
### 精确渲染
在这里`formily`团队参考`Mobx`的历年，针对表单特性和`React`的特性重新定制了全新的轮子[Reactive](https://reactive.formilyjs.org/zh-CN/guide)，该轮子强依赖`proxy`，因此不支持`IE`浏览器。

## 补充介绍

### Core
![](https://img.alicdn.com/imgextra/i4/O1CN01HlrsLS1hQAJnihhh1_!!6000000004271-55-tps-2431-2037.svg)
Formily 内核其实是一个 `@formily/reactive` 领域模型。
实际消费领域模型则主要是依赖 `@formily/reactive` 的 响应器 机制做依赖追踪来消费。
我们可以在响应器(`Reactions`)中消费 `Form/Field/ArrayField/ObjectField/VoidField` 模型中的任意属性，依赖的属性发生变化，响应器就会重复执行。从而实现了表单层面的 `Reactive` 编程模型。

在`MVVM`模式中，Formily 它提供了 View 和 ViewModel 两层能力，View 则是`@formily/react` `@formily/vue`，专门用来与`@formily/core` 做桥接通讯的，所以，`@formily/core` 的定位就是 ViewModel 层。


### Reactive
![](https://img.alicdn.com/imgextra/i4/O1CN01DQMGUL22mFICDsKfY_!!6000000007162-2-tps-1234-614.png)

#### observable
`ovservable`是一个可订阅对象，**通过创建一个可订阅对象，在每次操作该对象属性的过程中，会自动通知订阅者**。这个过程，如果了解`Vue3`的话，那么其实这里是和`Vue3`响应式有相同的特点，通过`Porxy`的特点进行数据的劫持操作，然后对订阅者发起对应的操作。

##### 如何使用
`ovservable`主要有以下几个API创建`observable`对象：
- `observable.deep`：深度劫持的`ovservable`对象
- `observable.shallow`：浅劫持的`ovservable`对象
- `observable.computed`：缓存计算的`ovservable`对象
- `observable.box`：带有`get/set`方法的`ovservable`对象
- `observable.ref`：引用级的`ovservable`对象

`define`函数定义`observable`领域模型。
`model`函数定义自动`overvable`领域模型。

**那么`define`和`model`有什么区别呢？**
- `define`函数定义的模型，可以组合`observable`函数和其静态模型
- `model`函数定义的模型会对`getter/setter`包装为`computed`属性，函数包装为`action`，其他属性用`observable`**进行深劫持包装**。

#### Reaction
上面的`overvable`是一个可订阅对象，在响应式模型中，`Reaction`便是`observale`的订阅者。
`Reaction`通过接收一个`tracker`函数来确定依赖关系和进行相关的操作。
>`tracker`函数在执行时，如果函数内部的`observable`对象进行读操作（依赖收集）时，`reaction`就会与该属性进行绑定（依赖追踪），知道该属性在其他地方发生了**写操作**，就会触发 tracker 函数重复执行。

这里同构上面的`Reactive`运转图可以得知这是一个封闭的发布订阅状态机。
每次 tracker 函数执行的时候都会重新收集依赖，依赖变化时又会重新触发 `tracker` 执行。所以，如果一旦我们不想再订阅 `reaction` 了，一定要手动 `dispose`，否则会内存泄漏。

##### 如何使用
同样的，我们也有下面的API创建`reaction`：
- `autorun`：创建一个自动执行的响应器
- `rection`：创建一个可以实现脏检查的响应器
- `Tracker`：创建一个依赖追踪器，需要用户手动执行追踪

#### Computed
`computed` 是一个可以缓存计算结果的 `Reaction`。
它的缓存策略是：**只有 `computed` 函数内部所依赖的 `observable` 数据发生变化，函数才会重新执行计算，否则永远读取缓存结果**。

>这里要求的就是 `computed` 函数必须是纯函数，内部依赖的数据要么是 `observable` 数据，要么是外部常量数据，如果是外部变量数据(非 `observable`)，那如果外部变量数据发生变化，`computed` 是不会重新执行计算的。

#### Batch
合并更新模式，将原子们的更新进行合并，避免重复的数据渲染。

```jsx
import { observable, autorun, batch } from '@formily/reactive'

const obs = observable({})
const handler = () => {
  obs.aa = 123
  obs.bb = 321
}
autorun(() => {
  console.log(obs.aa, obs.bb)
})
batch(() => {
  handler()
})
```

#### 注意事项
-   尽量少用 `observable/observable.deep` 进行深度包装，不是非不得已就多用 `observable.ref/observable.shallow`，这样性能会更好
-   领域模型中多用 `computed` 计算属性，它可以智能缓存计算结果
-   虽然批量操作不是必须的，但是尽量多用 `batch` 模式，这样可以减少 `Reaction` 执行次数
-   使用 `autorun/reaction` 的时候，一定记得调用 `dispose` 释放函数(也就是调用函数所返回的二阶函数)，否则会内存泄漏

### React

`@formily/react`核心是实现`core`和组件之间的一个绑定关系。
![](https://img.alicdn.com/imgextra/i1/O1CN013jbRfk1l5n6N7jYH8_!!6000000004768-55-tps-2200-1637.svg)

## 参考
- [# Reactive](https://reactive.formilyjs.org/zh-CN/guide)
- [# Formily](https://formilyjs.org/zh-CN)
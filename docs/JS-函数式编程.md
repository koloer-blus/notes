# JavaScript 函数式编程

## 什么是函数式编程？
- 编码范式
- 编码风格
- 编码思想
或者说都可以是。归根结底，**函数式编程的本质是没有副作用**，也就是说，输出完全由输入决定。它不依赖于当前函数之外的数据，也不会改变存在于当前函数之外的数据


## JS中的函数式编程

随着原型链和`ES6`的class的普及，越来越多的`javascript`爱好者提出了多种多样的编程风格，面向对象、原型链等等。但是相比起这些，`js`更适合函数式编程，首先`javascript`是以函数为一等公民的语言，其次弱类型为函数式编程提供了更广阔的空间。

### 纯函数
这里主要是指不会在函数本身目标功能之外影响其他内容。这在`javascript`中尤其需要注意，因为有时候我们传入的是一个引用数据类型，改变或者操纵其中的值可能会导致这个原本的引用对象改变。因此当我们需要改变这些值时，提前进行深拷贝或者浅拷贝时不错的选择。
```js
// 改了 global 变量  
var a = 0;  
a++;  
  
const list = [{type:'香蕉'，age：18},...];  
// 修改 list 中的 type 和 age  
list.map(item => {  
  item.type = 1;  
  item.age++;  
})
```


比如下面这些情况都属于产生了一定的副作用：
-   修改外部的state
-   发送HTTP Request
-   Rendering screen
-   使用会改变原数组/变量的JS method (eg. splice)
-   修改任何外部变量
-   DOM 操作
-   读取input 的值
-   Changing DB value
-   logging & console: 改变了系统状态


### 高阶函数
这是一个新的概念，利用函数来返回函数，让我们实现对单个函数的赋能和工程化的处理。

### 迭代
这里比较有意思的一点是，我们在函数式编程的过程中不推荐使用迭代列表去遍历，比如说`for……in`和`while`等方式来递归处理我们的元素。我们更推荐使用`map`、`reduce`、`forEach`等方式遍历对应的数值，一是浏览器本身对这些自带的迭代器`api`有优化，其次使用这些函数能让我们更明确当前的递归操作的目的是什么。

### 持久化数据
即创建之后不可以再修改的数据。其实就是确保数据的不可变性，比如说`react`的单向数据流，就利用函数式编程的思想很好的保证了数据流的一致性。
对于所有的外部变化操作我们最好复制一份进行相关操作：
```js
// mutable  
const balls = ['basketball', 'volleyball', 'billiards']  
balls[1] = 'Table Tennis'; // 改变数组原有项  
balls // ['Table Tennis', 'volleyball', 'billiards']  
  
// immutable  
const balls = ['basketball', 'volleyball', 'billiards']  
const newBalls = [...balls] // 复制一份  
newBalls[1] = 'Table Tennis';   
balls  // ['basketball', 'volleyball', 'billiards'] 跟原本一样  
newBalls// ['Table Tennis', 'volleyball', 'billiards']
```

### 职责单一原则

-   单一职责原则可以简要的理解为，对于变化频繁的内容，并且可以独立出来单独封装成类，那么就需要提取这些内容
-   我们在业务中可以在开始写一个粗粒度的类，当发现远远不能满足业务的变化时，需要更细粒度的划分类里面的内容，就需要提取封装这些内容了

### 开闭原则

添加一个新的功能，应该是通过在已有代码基础上扩展代码（新增模块、类、方法、属性等），而非修改已有代码（修改模块、类、方法、属性等）的方式来完成。

## 优秀库推荐

- [# Ramda](https://ramdajs.com/)
- [# Immutable.js](https://immutable-js.com/)
- [# lodash FP](https://github.com/lodash/lodash/wiki/FP-Guide)
- [# underscore.js](https://underscorejs.org/)

## 参考
- [# 结合SOLID设计原则，浅谈如何提升前端代码质量](https://mp.weixin.qq.com/s/57ZP0EWbWnxgnGdY_12tng)
- [# 浅谈 Function Programing 编程范式](https://mp.weixin.qq.com/s/MgIjHlAo-tDm0ic4NQwGXQ)
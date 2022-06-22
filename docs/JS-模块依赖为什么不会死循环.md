# JS模块依赖为什么不会死循环

>在上文我们介绍了目前的[JS模块化方案](./JS-模块化浅谈.md)，本期我们就继续深入，来了解为什么JS模块依赖不会像Go一样出现死循环。

## CommonJS
`Commonjs`是一种适用于服务端`Node`应用的模块化加载方案，那么再`CommonJS`中，如果出现了如下模块a和模块b循环引用，会输出什么？

```js
//index.js  
var a = require('./a')

console.log('0 a模块', a)
  
// a.js  
exports.a = 'a0'
var b = require('./b')
console.log('a中b：', b)
exports.a = 'a1'
  
// b.js  
exports.b = 'b0'
var a = require('./a')
console.log('b中a', a)
exports.b = 'b1'
```

本应该得到模块之间相互引用死循环，但是得到的结果是：

```js
b中a { a: 'a0' }
a中b： { b: 'b1' }
0 a模块 { a: 'a1' }
```

这是为什么呢？**其实再[上篇文章](./JS-模块化浅谈.md)中我们介绍过，`CommonJS`会对已经引入过的模块进行缓存**,`CommonJS`对每一个模块先缓存然后进行执行，然后再`require`是检查缓存，借助缓存得到理想的值。也正是通过这种机制，避免了前端模块中的重复引用。
至于输出的是修改后的值，这是因为`exports`是会进行覆盖的。

## ES Module
`ES Module`是更适用于浏览器端的标准JavaScript模块化方案，我们将上面的代码稍作修改，然后看看`ESModule`是如何处理模块间的循环依赖的。

```js
//index.js  
import * as a from './a.mjs'
console.log('0 a模块', a)
  
// a.js  
let a = 'a0'
export { a }
import * as b from './b.mjs'
console.log('a中b：', b)
a = 'a1'
  
// b.js  
let b = 'b0'
export { b }
import * as a from './a.mjs'
console.log('b中a', a)
b = 'b1'
```

我们得到的结果如下

```js
b中a [Module: null prototype] { a: <uninitialized> }
a中b： [Module: null prototype] { b: 'b1' } 
0 a模块 [Module: null prototype] { a: 'a1' }
```

可以看到，在b模块中引用a模块时，得到的值是`uninitialized`，这是因为再代码执行前，首先要通过`import`和`export`构建模块地图(Module Map)进行预处理，并且标注导出变量的内存地址然后进行变量连接，但是此时这些内存由于代码尚未执行的远古，内存都是空的，所以也就是`uninitialized`。

所以，**`ES Module`来处理循环使用一张模块间的依赖地图来解决死循环问题**，标记进入过的模块为“获取中”，所以循环引用时不会再次进入；使用模块记录，标注要去哪块内存中取值，将导入导出做连接，解决了要输出什么值。

## 总结（这里直接使用参考问行的完美总结）

1.  `CommonJS`和`ES Module`都对循环引入做了处理，不会进入死循环，但方式不同：
	-   `CommonJS`借助模块缓存，遇到`require`函数会先检查是否有缓存，已经有的则不会进入执行，在模块缓存中还记录着导出的变量的拷贝值；
	-   `ES Module`借助模块地图，已经进入过的模块标注为获取中，遇到`import`语句会去检查这个地图，已经标注为获取中的则不会进入，地图中的每一个节点是一个模块记录，上面有导出变量的内存地址，导入时会做一个连接——即指向同一块内存。
2.  `CommonJS`的`export`和`module.export`指向同一块内存，但由于最后导出的是`module.export`，所以不能直接给`export`赋值，会导致指向丢失。
3.  查找模块时，核心模块和文件模块的查找都比较简单，对于`react/vue`这种第三方模块，会从当前目录下的`node_module`文件下开始，递归往上查找，找到该包后，根据`package.json`的`main`字段找到入口文件。

## 参考
- [# 抖音二面：为什么模块循环依赖不会死循环？CommonJS和ES Module的处理有什么不同？](https://mp.weixin.qq.com/s/JSlJn_LzbkAOy6LNyY5_jQ)
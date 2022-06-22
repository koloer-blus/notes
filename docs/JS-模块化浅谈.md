# JavaScript模块化浅谈
## 背景
前端工程复杂度随着项目需求变化日益增长，原始的开发方式带来的命名冲突、依赖加载、网络请求等问题层出不穷。在这种条件下支持`javascript`模块化编程成为迫切的需求。

## 模块化规范

### CommonJS
`CommonJS`是2009年正式启动的模块化标准，在当时主要是对`Node`服务端`JavaScript`应用程序进行支持。
在`CommonJS`中，每一个文件是具有自己独立作用域的模块，在一个文件中定义的变量、函数、类都是私有的，对其他文件并不可见。
**在服务端，这些模块的加载时同步的；而在浏览器端，模块加载前需要进行编译打包处理**。

#### 如何使用
```js
//暴露模块
//hello.js
const a = sayHello = (name) => console.log("hello, " + name )

module.exports.sayHi = sayHello;
```

在上面的代码中，`module`代表当前模块，这个模块的`exports`属性是对外的接口，加载摸一个模块，其实加载的就是该模块的`module.exports`属性。

```js
//引入模块
const heloo = require('./hello.js');

heloo.sayHi("Tom");
```

`require`命令用于加载模块，读取并执行一个`javascript`文件，然后读取并返回该模块的`exports`对象。`require`命令第一次加载该脚本就会执行整个脚本，然后会在内存中生成一个对象。即使再次执行`require`命令，也不会再执行该模块，而是到缓存中去取值。

#### 加载机制

`CommonJS`模块的加载机制是**输出的值是输入的值的拷贝**，也就是说，一旦输出一个值，模块内部值得变化就不会影响到这个值。

#### 特点
- 所有代码都会运行再独立的作用域，不会污染全局。
- 同步加载方式会导致读取缓慢。
- 占用内存进行缓存的方式不适用于浏览器端。

### AMD(Asynchronous Module Definition)
`AMD`定义了一种用于异步加载模块和依赖项的机制，这使得它特别适用于那些同步加载导致的性能、可用性、调试和跨段方案导致出现问题的浏览器环境。
`AMD`再所有依赖加载完成后一回调函数的方式执行代码。

#### 如何使用
```js
//AMD定义模块
define(id?, dependencies?, factory);
```

-   id：模块的名字，如果没有提供该参数，模块的名字应该默认为模块加载器请求的指定脚本的名字
-   dependencies：模块的依赖，已被模块定义的模块标识的数组字面量。依赖参数是可选的，如果忽略此参数，它应该默认为 `["require", "exports", "module"]`。然而，如果工厂方法的长度属性小于3，加载器会选择以函数的长度属性指定的参数个数调用工厂方法。
-   factory：模块的工厂函数，模块初始化要执行的函数或对象。如果为函数，它应该只被执行一次。如果是对象，此对象应该为模块的输出值。

```js
require([module], callback);
```
- module，是一个数组，里面的成员是要加载的模块。
- callback是加载完成后的回调函数，回调函数中参数对应数组中的成员（模块）。

下面是定义一个模块：
```js
//定义函数
//依赖于module1和module2
define(['module1', 'module2'], function(m1, m2){ return 模块 })
```
然后引用它：
```js
require(['module1', 'module2'], function(m1, m2){ 使用m1/m2 })
```

#### 特点
- 模块定义的方法非常清晰
- 不会污染全局环境
- 能够清楚地显示依赖关系
- 不支持按需加载，开发成本较大

### CMD(Common Module Definition)
`CMD`是结合了`AMD`异步加载的特点和`CommonJS`特点结合而成，**AMD推崇以来前置，提前执行，而CMD则推崇就近、延迟执行**。因此，CMD是支持按需加载的。
#### 如何使用
```js
//定义暴露模块
define(function(require, exports, module){ 
	exports.xxx = value;
	module.exports = value;
})
```

```js
//引入模块
define(function (require) {
	var m1 = require('./module1');
	var m4 = require('./module4');
	m1.show();
	m4.show();
})
```

#### 特点
- 支持异步加载
- 就近依赖
- 模块解析为字符串消耗一定的性能


### ES Moudle
**ES 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量**。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。
#### 如何使用
`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。

```js
//导出模块
const age = 2;
const say = () => console.log('hi');
export default say;
export {
	age,
}
```

模块默认输出, 其他模块加载该模块时，`import`命令可以为该匿名函数指定任意名字。

```js
//引入模块
import say, {age} from './say.js';
say();
```

除了上面的用法，我们还可以直接将暴露的所有接口统一放到一个文件中：
```js
export *  from './say.js';
```

**相比起CommonJS，ES Moudle模块输出的是值的引用，并且ES Module是在编译时输出接口**。除此之外，ES6 模块的运行机制与 CommonJS 不一样。**ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块**。

#### 特点
- 动态引用
- 静态化的加载
- 更好的模块化功能和使用方法
- 本身对ES语言标准的支持

## 参考
- [# Javascript模块化详解](https://segmentfault.com/a/1190000039375332)
-  [#【深度全面】前端JavaScript模块化规范进化论](https://segmentfault.com/a/1190000023711059)
- [# 前端模块化详解(完整版)](https://juejin.cn/post/6844903744518389768)
- [# JavaScript 模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)
- [# amd.js](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)
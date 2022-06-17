# 前端如何做CSS模块化方案

在前端项目中我们经常遇到前端项目中的代码样式冲突和混乱重复的问题，针对这一问题目前我们常见的解决方法有：

- CSS命名和书写规范化管理
- 采用`CSS modules`进行管理
- 使用`CSS-In-JS`方案（`React`）
- 使用`style scoped`方案
- 使用`tailwind`原子化方案

那么这些方案中有没有最好的呢？或者说，有没有最优解呢？

## CSS 命名和书写规范化管理
### BEM命名规范

>BEM是三个单词的缩写：Block（块）代表更高级别的抽象或组件，Element（元素） Block的后代，以及Modifier（修饰） 不同状态的修饰符。

- 中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号；
- __ 双下划线：双下划线用来连接块和块的子元素；
- _ 单下划线：单下划线用来描述一个块或者块的子元素的一种状态；

#### BEM写法

```css
.block {}
.block__element {}
.block--modifier {}
```

BEM 的目的是告诉其他开发人员更多地从其名称中了解一段标记正在做什么。通过阅读一些包含一些类的 HTML，可以看到这些块是如何相关的（如果有的话）；某物可能只是一个组件，某物可能是该组件的子项或元素，某物可能是该组件的变体或修饰符。

#### BEM的特点是：
- 模块化强：块样式永远不会依赖于页面上的其他元素，因此永远不会遇到[级联问题](http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/)。
- 复用性强：以不同的方式组合独立的块并智能地重用它们，可以减少必须维护的 CSS 代码量。
- 结构简洁：BEM 方法为`CSS` 代码提供了一个简单易懂的坚实结构。

### OOCSS

### SMACSS

### ITCSS

## CSS Modules

### 原生CSS Modules

### 结合CSS预处理器

## CSS in JS

### emotion

### styled-components

## style scoped

### Vue

### React


## Tailwind

## 参考
- [# CSS — BEM 命名规范](https://juejin.cn/post/6844903672162304013)
- [# Get BEM](http://getbem.com/introduction/)
- [# CSS 模块化方案探讨（BEM、OOCSS、CSS Modules、CSS-in-JS ...）](https://segmentfault.com/a/1190000039772466)
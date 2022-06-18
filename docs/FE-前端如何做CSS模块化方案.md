# 前端如何做CSS模块化方案

在前端项目中我们经常遇到前端项目中的代码样式冲突和混乱重复的问题，针对这一问题目前我们常见的解决方法有：

- CSS命名方法
- 采用`CSS modules`进行管理
- 使用`CSS-In-JS`方案（`React`）
- 使用`style scoped`方案
- 使用`tailwind`原子化方案

那么这些方案中有没有最好的呢？或者说，有没有最优解呢？

## CSS 命名方法

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

> Objectd Oriented CSS，即为面向对象的CSS

#### 两个原则
- 独立的结构和样式：把布局样式和设计样式独立出来；
- 独立的容器和内容：把内容从容器中分离出来；

#### 具体使用
OOCSS使用需要为需要进行样式修改的容器创建多个类，并且确保样式和类的一一对应关系，不去让一个类做很多事。

```HTML
<div class="size1of4 bgBlue solidGray mts mlm mrm mbm"></div>
```

```css
.size1of4 {width: 25%;}
.bgBlue {background:blue}
.solidGray {border: 1px solid #ccc}
.mts {margin-top: 5px}
.mrm {margin-right: 10px}
.mbm {margin-bottom: 10px}
.mlm {margin-left: 10px}

```

#### 特点
- 可复用的最大化
- 适用于大型项目
- 较强的逻辑层次关系

### SMACSS

> SMACSS 是一套可拓展的模块化CSS结构的方案

#### 规则分类
SMACSS的核心是对CSS规则进行分类，并且通过分类使用CSS架构的个各种模式，围绕模式得到更好的结果。SMACSS一共将规则分为下面五类：
1.  Base（基础）：放置一些默认样式和基础自定义样式；
3.  Layout（布局）：将页面拆分成多个部分，并且在每个部分都能有一到多个模块；
4.  Module（模块）：页面的组成模块，侧边栏，内容区等；
5.  State（状态）：定义特殊状态，比如说我们点击、摁下特定键；
6.  Theme（主题）：和状态规则类似，但是我们这里更多的是定义模块或者布局的外观；

#### 如何使用

1.  基础规则是直接作用于元素的，因此不需要前缀。
2.  布局的前缀是 `l-` 或 `layout-`，例如 `.l-table`、`.layout-grid` 等。
3.  模块的前缀是 `m-` 或模块自身的命名，例如 `.m-nav`、`.card`、`.field` 等。
4.  状态的前缀是 `is-`，例如 `.is-active`、`.is-current` 等。
5.  主题的前缀是 `theme-`，例如 `.theme-light`、`.theme-dark` 等。

```CSS
/* 示例 */
/* Example Module */
.example { }

/* Callout Module */
.callout { }

/* Callout Module with State */
.callout.is-collapsed { }

/* Form field module */
.field { }

/* Inline layout  */
.l-inline { }
```


### ITCSS
>ITCSS 代表_倒三角形 CSS。_它可以帮助您组织项目 CSS 文件，以便您可以更好地**处理**CSS 细节，如**全局命名空间、级联**和**选择器特性**。

#### 代码分层

![](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/01083650/itcss-layers2.svg)


-   settings——全局一起使用，包含字体、颜色定义等。
-   tools——全局使用的 mixin 和函数。重要的是不要在前 2 层输出任何 CSS。
-   generic – 重置和/或规范化样式、box-sizing 定义等。这是生成实际 CSS 的第一层。
-   elements – 纯 HTML 元素（如 H1、A 等）的样式。这些带有浏览器的默认样式，因此我们可以在这里重新定义它们。
-   objects——基于类的选择器，定义了未修饰的设计模式，例如从 OOCSS 中知道的媒体对象
-   components——特定的 UI 组件。这是我们大部分工作发生的地方。我们经常用 Objects 和 Components 组成 UI 组件
-   utils- 实用程序和辅助类能够覆盖三角形中之前的任何内容，例如隐藏辅助类

该三角形还显示了样式在生成的 CSS 中的显示方式：从通用样式到显式样式，从低特异性选择器到更具体的选择器，从影响深远的选择器到本地化样式。

![](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10154630/itcss-key-metrics.svg)

#### 如何使用
文件组织（使用SCSS进行预编译）：

```css
@import 'settings/*';
@import 'tools/*';
@import 'generic/*';
@import 'elements/*';
@import 'vendor/*';
@import 'objects/*';
@import 'components/*';
@import 'utilities/*';
```

#### 注意事项
- 在ITCSS中每个组件使用一个文件夹，不要进行文件夹中文件的组件样式的混合使用；
- 嵌套层级尽可能不要过深，尽可能维持扁平化的结构
- 不要过度的依赖对象

## CSS Modules
> CSS Modules确保当前CSS样式文件下的所有Class以及动画等名称都会有基于文件的作用域。

### 如何使用
以React项目为例，现在有一个`App.jsx`和`App.module.css`

```CSS
// App.module.css

.head-banner {
	height: 38px;
	color: red;
}
```

```JSX
import style from './App.module.css';

const App = () => (
	<div>
		<div className={style['head-banner']}>head</div>
	</div>
)
```

#### Vite

在`Vite`中使用需要在`Vite.config.js`中对CSS模块进行[配置](https://vitejs.dev/config/#css-modules)：

```js
css: {

	modules: {

		generateScopedName: 'sHs[name]__[local]__[hash:base64:5]'

	},

},
```

#### webpack
在`webpack`中主要通过[配置CSS-Loader](https://github.com/webpack-contrib/css-loader#modules)来实现CSS模块化的处理：

```js
{
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          modules: true,
        },
},
```

## CSS in JS
> 这是一种通过在JS中维护CSS的方法，除了支持正常的样式字符串书写，还可以借助函数、模板字符串、变量计算等方式帮助我们拓展CSS的性能。


### [emotion](https://emotion.sh/docs/introduction)

emotion除了支持对象样式和字符串样式之外，最大的亮点是支持`source Map`，解决了之前样式代码调试困难的问题。

```js
import { css, cx } from '@emotion/css'

const color = 'white'

render(
  <div
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
)
```

### [styled-components](https://styled-components.com/docs)
Style Components 是当下最被认可和接受的 CSS-in-JS 库，目前文档社区都较为完善，并且性能相比Emotion有较大优势。

```js
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`

render(
  <div>
    <Button
      href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noopener"
      primary
    >
      GitHub
    </Button>

    <Button as={Link} href="/docs">
      Documentation
    </Button>
  </div>
)
```

## style scoped

### Vue
```Vue
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

### React
使用[react-scoped-css](https://github.com/gaoxiaoliangz/react-scoped-css)进行处理
```jsx
import React from 'react'
import './Title.scoped.css'

const Title = props => {
  return (
    <h1 className="title">
      <p>{props.children}</p>
    </h1>
  )
}

export default Title
```

```css
.title[data-v-15763057] {
  background: #309dcf;
}
p[data-v-15763057] {
  color: #fff;
}
```

## [Tailwind](https://www.tailwindcss.cn/)
>Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 `flex`, `pt-4`, `text-center` 和 `rotate-90` 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。

从目前来看，`tailwind`是一种原子化的CSS方案，通过组合和搭配来实现想要的样式。

```html
<h1 class="flex-auto text-xl font-semibold"> Classic Utility Jacket </h1>
```

## 参考
- [# CSS — BEM 命名规范](https://juejin.cn/post/6844903672162304013)
- [# Get BEM](http://getbem.com/introduction/)
- [# CSS 模块化方案探讨（BEM、OOCSS、CSS Modules、CSS-in-JS ...）](https://segmentfault.com/a/1190000039772466)
- [# OOCSS](https://www.w3cplus.com/css/oocss-concept)
- [# SMACSS](https://smacss-zh.vercel.app/preface/2-%E4%BB%8B%E7%BB%8D.html)
- [# ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [# 深入浅出CSS Modules](https://segmentfault.com/a/1190000039846173)
- [# CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
# CSS 渲染初探

## 浏览器渲染引擎

了解CSS渲染原理之前，就不得不了解浏览器组成部分中的渲染引擎（`Rendering engine`）：
解析 DOM 文档和 CSS 规则并将内容排版到浏览器中显示有样式的界面，也就是排版引擎，我们常说的浏览器内核主要指的就是渲染引擎。
![](https://raw.githubusercontent.com/chenfengyanyu/my-web-accumulation/master/images/css/render2.png)

在上图中，`HTML Parser` 生成 `DOM` 树，`CSS Parser` 生成 `Style Rules` 。在这之后，`DOM` 树与 `Style Rules`通过`Style Engine`（样式引擎） 会生成一个新的对象，也就是我们常说的 `Render Tree` 渲染树，结合 `Layout` 绘制在屏幕上，从而展现出来。

## CSS语法解析过程
CSS语法解析当然不是无章可循，他也有属于自己的规则：
- `WebKit` 使用 `Flex` 和 `Bison` 解析器生成器，通过 `CSS` 语法文件自动创建解析器，`Bison` 会创建自下而上的移位归约解析器。
- `Firefox` 使用的是人工编写的自上而下的解析器。

这两种解析器都会将 `CSS` 文件解析成 `StyleSheet` 对象，且每个对象都包含 `CSS` 规则。`CSS` 规则对象则包含选择器和声明对象，以及其他与 `CSS` 语法对应的对象。
![](https://raw.githubusercontent.com/chenfengyanyu/my-web-accumulation/master/images/css/render2.png)
如上图所示，CSS在解析过程中会分解为`Rule`和`Declaration`来操作：

![](https://raw.githubusercontent.com/chenfengyanyu/my-web-accumulation/master/images/css/css-rule.jpg)

那么具体的解析规则是什么呢？使用`document.styleSheets[0].cssRules`在控制台打印后，我们得到如下结果：
```js
cssText: ".fa-3x { font-size: 3em; }"
parentRule: null
parentStyleSheet: CSSStyleSheet {ownerRule: null, cssRules: CSSRuleList, rules: CSSRuleList, type: 'text/css', href: 'http://jartto.wang/assets/css/style-amswellqtyheub…tcaxxnc5dvbfw49m4rvjaocb7nstambtlprry5pr8.min.css', …}
selectorText: ".fa-3x"
style: CSSStyleDeclaration {0: 'font-size', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
styleMap: StylePropertyMap {size: 1}
type: 1
[[Prototype]]: CSSStyleRule
```

上面这么多的规则，看的我们眼花缭乱，但是不要操之过急，我们还没有利用`webkit`来细看它内部是如何解析CSS的：
![](https://raw.githubusercontent.com/chenfengyanyu/my-web-accumulation/master/images/css/test_CSSOM.png)
通过上图我们可以发现，CSS的相关内容是使用`WebCore`进行解析的，[WebCore](https://github.com/WebKit/webkit/tree/main/Source/WebCore/css):
`Webkit` 使用了自动代码生成工具生成了相应的代码，也就是说词法分析和语法分析这部分代码是自动生成的，而 `Webkit` 中实现的 `CallBack` 函数就是在 `CSSParser` 中。

## CSS选择器执行顺序

```html
<div>  
   <div class="jartto">  
      <p><span> 111 </span></p>  
      <p><span> 222 </span></p>  
      <p><span> 333 </span></p>  
      <p><span class='yellow'> 444 </span></p>  
   </div>  
</div>
```


```css
div > div.jartto p span.yellow{  
   color:yellow;  
}
```

渲染引擎解析 `CSS` 选择器时是从右往左解析：  
1.首先就查找到 `class=“yellow”` 的 `span` 元素；  
2.接着检测父节点是否为 `p` 元素，如果不是则进入同级其他节点的遍历，如果是则继续匹配父节点满足 `class=“jartto”` 的 `div` 容器；  
3.这样就又减少了集合的元素，只有符合当前的子规则才会匹配再上一条子规则。

那么这里就会有一个问题，为什么不是从左向右呢？
从左向右查找意味着是一个父找子的过程，在多级嵌套关系中，可以参考多叉树的查找，当没有找到后意味着要进行反复的回溯才能找到最终的符合条件的`rule`。

所以，我们在书写 `CSS Selector` 时，从右向左的 `Selector Term` 匹配节点越少越好。

## 参考
- [# CSS 渲染原理以及优化策略](https://segmentfault.com/a/1190000021073560)
# JavaScript 沙箱
## 什么是沙箱
沙箱，即`sandbox`，顾名思义，就是让你的程序跑在一个隔离的环境下，不对外界的其他程序造成影响，通过创建类似沙盒的独立作业环境，在其内部运行的程序并不能对硬盘产生永久性的影响。

其实最简单的例子来看，就是我们常见的`codesand box`和`code pen`这一类代码平台。

## 在JS中如何实现沙箱
### eval
**`eval()`** 函数会将传入的字符串当做 JavaScript 代码进行执行。

`eval()` 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果你用 `eval()` 运行的字符串代码被恶意方（不怀好意的人）修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 `eval()` 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 就不容易被攻击。

```js

function poorestSandbox(code) {

    eval(code);

}


// 待执行程序

const code = `

const ctx = {

    add: (num) => {

        return num + ctx.base;

    },

    base: 0

};

ctx.base = 3;

const res = ctx.add(10);

console.log(res);

`;


poorestSandbox(code);

// console 13
```

这样的沙箱的弊端就很明显了。因为`eval`函数本身的危险性和执行权限的过高，会导致我们的沙盒失去了安全性的同时还会影响到全局的状态。而且`eval`的代码运行速度也是十分缓慢的。

### with
**with语句** 扩展一个语句的作用域链。`with`语句将某个对象添加到作用域链的顶部，如果在statement中有某个未使用命名空间的变量，跟作用域链中的某个属性同名，则这个变量将指向这个属性值。如果沒有同名的属性，则将拋出[`ReferenceError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)异常。
```
function poorestSandbox(code, obj) {

    with(obj) {

        eval(code);

    }

}

var obj = {};

// 待执行程序
……


poorestSandbox(code, obj);
```

看起来似乎是解决了对于全局的影响，但是这样的代码如此死板。在提供的上下文对象中没有找到某个变量时，代码仍会沿着作用域链一层一层向上查找，这样的一个沙箱仍然无法控制内部代码的执行。我们**希望沙箱中的代码只在手动提供的上下文对象中查找变量，如果上下文对象中不存在该变量则直接报错或返回** `undefined`。

`with`在内部使用`in`运算符。对于块内的每个变量访问，它都在沙盒条件下计算变量。如果条件是 true，它将从沙盒中检索变量。

### proxy


#### 单例沙箱

在ES6当中，我们可以通过代理`(Proxy)`实现对象的劫持。基本实录也是通过window对象的修改进行记录，在卸载时删除这些记录，在应用再次激活时恢复这些记录，来达到模拟沙箱环境的目的。

```
// 修改window属性的公共方法
const updateWindowProp = (prop, value, isDel) => {
    if (value === undefined || isDel) {
        delete window[prop];
    } else {
        window[prop] = value;
    }
}

class ProxySandbox {

    active() {
        // 根据记录还原沙箱
        this.currentUpdatedPropsValueMap.forEach((v, p) => updateWindowProp(p, v));
    }
    inactive() {
        // 1 将沙箱期间修改的属性还原为原先的属性
        this.modifiedPropsMap.forEach((v, p) => updateWindowProp(p, v));
        // 2 将沙箱期间新增的全局变量消除
        this.addedPropsMap.forEach((_, p) => updateWindowProp(p, undefined, true));
    }

    constructor(name) {
        this.name = name;
        this.proxy = null;
        // 存放新增的全局变量
        this.addedPropsMap  = new Map(); 
        // 存放沙箱期间更新的全局变量
        this.modifiedPropsMap = new Map();
        // 存在新增和修改的全局变量，在沙箱激活的时候使用
        this.currentUpdatedPropsValueMap = new Map();

        const { addedPropsMap, currentUpdatedPropsValueMap, modifiedPropsMap } = this;
        const fakeWindow = Object.create(null);
        const proxy = new Proxy(fakeWindow, {
            set(target, prop, value) {
                if (!window.hasOwnProperty(prop)) {
                    // 如果window上没有的属性，记录到新增属性里
                    // debugger;
                    addedPropsMap.set(prop, value);
                } else if (!modifiedPropsMap.has(prop)) {
                    // 如果当前window对象有该属性，且未更新过，则记录该属性在window上的初始值
                    const originalValue = window[prop];
                    modifiedPropsMap.set(prop, originalValue);
                }
                // 记录修改属性以及修改后的值
                currentUpdatedPropsValueMap.set(prop, value);
                // 设置值到全局window上
                updateWindowProp(prop, value);
                return true;
            },
            get(target, prop) {
                return window[prop];
            },
        });
        this.proxy = proxy;
    }
}


const newSandBox = new ProxySandbox('代理沙箱');
const proxyWindow = newSandBox.proxy;
proxyWindow.a = '1'
console.log('开启沙箱：', proxyWindow.a, window.a);
newSandBox.inactive(); //失活沙箱
console.log('失活沙箱：', proxyWindow.a, window.a);
newSandBox.active(); //失活沙箱
console.log('重新激活沙箱：', proxyWindow.a, window.a);

```

这种方式同一时刻只能有一个激活的沙箱，否则全局对象上的变量会有两个以上的沙箱更新，造成全局变量冲突。

#### 多例沙箱

在单实例的场景总，我们的fakeWindow是一个空的对象，其没有任何储存变量的功能，微应用创建的变量最终实际都是挂载在window上的，这就限制了同一时刻不能有两个激活的微应用。

```js
class MultipleProxySandbox {

    active() {
        this.sandboxRunning = true;
    }
    inactive() {
        this.sandboxRunning = false;
    }

    /**
     * 构造函数
     * @param {*} name 沙箱名称 
     * @param {*} context 共享的上下文
     * @returns 
     */
    constructor(name, context = {}) {
        this.name = name;
        this.proxy = null;
        const fakeWindow = Object.create({});
        const proxy = new Proxy(fakeWindow, {
            set: (target, name, value) => {
                if (this.sandboxRunning) {
                    if (Object.keys(context).includes(name)) {
                        context[name] = value;
                    }
                    target[name] = value;
                }
            },
            get: (target, name) => {
                // 优先使用共享对象
                if (Object.keys(context).includes(name)) {
                    return context[name];
                }
                return target[name];
            }
        })
        this.proxy = proxy;
    }
}

const context = { document: window.document };

const newSandBox1 = new MultipleProxySandbox('代理沙箱1', context);
newSandBox1.active();
const proxyWindow1 = newSandBox1.proxy;

const newSandBox2 = new MultipleProxySandbox('代理沙箱2', context);
newSandBox2.active();
const proxyWindow2 = newSandBox2.proxy;
console.log('共享对象是否相等', window.document === proxyWindow1.document, window.document ===  proxyWindow2.document);

proxyWindow1.a = '1'; // 设置代理1的值
proxyWindow2.a = '2'; // 设置代理2的值
window.a = '3';  // 设置window的值
console.log('打印输出的值', proxyWindow1.a, proxyWindow2.a, window.a);


newSandBox1.inactive(); newSandBox2.inactive(); // 两个沙箱都失活

proxyWindow1.a = '4'; // 设置代理1的值
proxyWindow2.a = '4'; // 设置代理2的值
window.a = '4';  // 设置window的值
console.log('失活后打印输出的值', proxyWindow1.a, proxyWindow2.a, window.a);

newSandBox1.active(); newSandBox2.active(); // 再次激活

proxyWindow1.a = '4'; // 设置代理1的值
proxyWindow2.a = '4'; // 设置代理2的值
window.a = '4';  // 设置window的值
console.log('失活后打印输出的值', proxyWindow1.a, proxyWindow2.a, window.a);


```

这种方式同一时刻只能有一个激活的多个沙箱，从而实现多实例沙箱。

### iframe

**HTML 内联框架元素 (`<iframe>`)** 表示嵌套的[browsing context](https://developer.mozilla.org/zh-CN/docs/Glossary/Browsing_context)。它能够将另一个 HTML 页面嵌入到当前页面中。

这其实是当前来说更为优秀的前端沙盒方案。利用iframe沙箱可以实现以下特性：

-   全局变量隔离，如setTimeout、location、react不同版本隔离
-   路由隔离，应用可以实现独立路由，也可以共享全局路由
-   多实例，可以同时存在多个独立的微应用同时运行

但是这不代表`iframe`是一种完美的方案，因为页面上的每个`<iframe>`都需要增加内存和其它计算资源，这是因为每个浏览上下文都拥有完整的文档环境。虽然理论上来说你能够在代码中写出来无限多的`<iframe>`，但是你最好还是先看看这么做会不会导致某些性能问题。

### fencedframe
目前来说这只是一项隐私沙盒的提案，通过对应及站点进行数据分区来保障用户的隐私。
```html
<fecedframe src="test.html"></fecedframe>
```

通过使用`src`来指定嵌入的内容。相比起`iframe`，`fecedframe`不支持使用`postMessage`与父元素进行通信，只能与他的`iframes`来通信。

## 参考

- [# 浅析 JavaScript 沙箱](https://www.teqng.com/2021/11/09/%E6%B5%85%E6%9E%90-javascript-%E6%B2%99%E7%AE%B1/#shen_me_shi_sha_xiang)
- [# eval](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [# 说说微前端JS沙箱实现的几种方式](https://juejin.cn/post/6981374562877308936#heading-3)
- [# iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)
- [# Fenced frame](https://wicg.github.io/fenced-frame/)
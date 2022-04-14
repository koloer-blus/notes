## UseEffect

> *Effect Hook* 可以让你在函数组件中执行副作用操作
>
> **提示**：
>
> 如果你熟悉 React class 的生命周期函数，你可以把 `useEffect` Hook 看做 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

### 执行时机

`useEffect`在浏览器的重回之后异步执行。

> 与 `componentDidMount`、`componentDidUpdate` 不同的是，传给 `useEffect` 的函数会在浏览器完成布局与绘制**之后**，在一个延迟事件中被调用。
>
> 然而，并非所有 effect 都可以被延迟执行。对于需要同步执行的`hooks`我们需要使用`useLayoutEffect`。
>
> `Effect`会保证在任何新的渲染前执行，在开始执行新的`Effect CallBack`前，总会清除上一轮渲染的`Effect`。

1. 默认情况，在第一次渲染之后*和*每次更新之后都会执行

   ```react
   const Effect: React.FC = () => {
     const [value, setValue] = React.useState('');
     React.useEffect(() => {
       document.title = value;
       console.log('value is ', value);
     });
     return (
       <div>
         <h2>Effect</h2>
         <input
           value={value}
           onChange={(e) => setValue(e.target.value)}
           placeholder="document.title" />
       </div>
     );
   };
   ```

2. 仅仅在`Dom`第一次渲染和每次`value`变化后执行

   ```react
   React.useEffect(() => {
       console.log('[dep value] value is ', value);
     }, [value]);
   ```

3. 仅仅在`Dom`第一次渲染执行

   ```react
   React.useEffect(() => {
       console.log('[first render] value is ', value);
     }, []);
   ```

### 传入依赖的比较规则

### `Object.is()`

> 用于判断两个值是否为同一个值

如果满足以下条件则两个值相等：

- 都是 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- 都是 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)
- 都是 `true` 或 `false`
- 都是相同长度的字符串且相同字符按相同顺序排列
- 都是相同对象（意味着每个对象有同一个引用）
- 都是数字且
  - 都是 `+0`
  - 都是 `-0`
  - 都是 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)
  - 或都是非零而且非 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) 且为同一个值

与[`==` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) 运算*不同。* `==` 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 `"" == false` 判断为 `true`), 而 `Object.is`不会强制转换两边的值。

与[`===` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) 运算也不相同。 `===` 运算符 (也包括 `==` 运算符) 将数字 `-0` 和 `+0` 视为相等 ，而将[`Number.NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN) 与[`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)视为不相等.

```js
// polyfill Object.is
if (!Object.is) {
    Object.is = function(x, y) {
        if (x === y) {
            return x !== 0 || 1/x === 1/y;
        } else {
            return x !== x && y !== y;
        }
    };
}
```


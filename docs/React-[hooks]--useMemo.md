## `UseMemo`

> 返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值。
>
> 把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。
>
> 记住，传入 `useMemo` 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 `useEffect` 的适用范畴，而不是 `useMemo`。
>
> 如果没有提供依赖项数组，`useMemo` 在每次渲染时都会计算新的值。

如果你了解`Vue`的`computed`属性的化，那么他们之间的作用其实有一些相似，只不过`Vue`计算属性只会在相关响应式依赖发生改变时重新求值，它是内部去控制这样的一个依赖控制和触发过程，而`React.useMemo`则是允许用户自定义触发时机。
## UseEvent
## 函数式组件每次都是捕获新的值
```js
function Chat() {
  const [text, setText] = useState('');

  // 🟡 Always a different function
  const onClick = () => {
    alert(text);
  };

  return <SendButton onClick={onClick} />;
}
```

## UseEvent事件函数
```js
function useEvent(handler) {
  const handlerRef = useRef(null);

  // In a real implementation, this would run before layout effects
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args) => {
    // In a real implementation, this would throw if called during render
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
}
```

## 参考
- https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md

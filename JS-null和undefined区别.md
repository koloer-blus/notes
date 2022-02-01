# null 和 undefined 区别

## 基本区别

- `null`：已定义但未指向内存中的对象
- `undefined`：没有定义尚未初始化的变量的值

![图片](https://mmbiz.qpic.cn/sz_mmbiz/H8M5QJDxMHrjZEwPEnyXQcDpq9v4A2mbBrLiaonnlIdyxNM7t9iaAibDKHZd8GvOER9iaySFh5ZqvOzQNVibu6hDUKg/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## 表现形式的区别

### typeof

```js
typeof null	//object
typeof undefined //undefined
```

### `==` 与 `===`

```js
null == undefined //true
null === undefined //false
```

### `number`数值转换

```js
undefined + 1 //NaN
null + 1 //1
```

### `Json`

```
JSON.stringfy({a: undefined}) // '{}'
JSON.stringfy({a: null}) // '{a: null}'
```

## 深入理解

### `typeof null === 'object'`

在 `JavaScript` 初始版本中，值以 `32位` 存储。前 `3位` 表示数据类型的标记，其余位则是值。
对于所有的对象，它的前 `3位` 都以 `000` 作为类型标记位。在 `JavaScript` 早期版本中， `null` 被认为是一个特殊的值，用来对应 `C` 中的 `空指针` 。但 `JavaScript` 中没有 `C` 中的指针，所以 `null` 意味着什么都没有或者 `void` 并以 `全0(32个)` 表示。

因此每当 `JavaScript` 读取 `null` 时，它前端的 `3位` 将它视为 `对象类型` ，这也是为什么 `typeof null` 返回 `'object'` 的原因。

### 默认参数

```js
function getInfo(name = 'jack') {
    console.log(name);
}
getInfo(undefined) // 'jack'
getInfo(null) // null
```

## 总结

- `null`：`null`在除原型链访问外需要主动复制，刻意表示为空，这其实是进行内存的一种指向空操作；
- `undefined`：`undefined`并非是直接为空，代表的是不存在的意义；

> 参考：https://mp.weixin.qq.com/s/CoIWXZ1mE8EG0ytVEzaOYQ
# JS-如何实现深拷贝
> 深度克隆就是为了解决对于引用的数据进行克隆的问题。

## weakMap版
- 存储遍历后的元素，避免了出现循环引用的问题
- BFS遍历

```javascript
function deepCopy(obj, hash = new WeakMap()) {

 if (hash.has(obj)) {

 return obj;

 }

 let res = null;

 const reference = [Date, RegExp, Set, WeakSet, Map, WeakMap, Error];

 if (reference.includes(obj?.constructor)) {

 res = new obj.constructor(obj);

 } else if (Array.isArray(obj)) {

 res = [];

 obj.forEach((e, i) => {

 res[i] = deepCopy(e);

 });

 } else if (typeof obj === 'object' && obj !== null) {

 res = {};

 for (const key in obj) {

 if (Object.hasOwnProperty.call(obj, key)) {

 res[key] = deepCopy(obj[key]);

 }

 }

 hash.set(obj, res);

 } else {

 res = obj;

 }

 return res;

}
```

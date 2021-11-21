/**
 * new 操作符
 * 1. 创建全新的对象
 * 2. 修改对象的`__proto__`
 * 3. `this`指向新的对象
 * 4. 通过`new`创建的每个独享追钟被`[[Prototype]]`链接到这个函数的`prototype`对象上
 * 5. 如果函数没有返回对象类型`Object`，那么`new`中调用该函数返回该对象的引用
 * @param {function} func 
 */
function _New(func) {
  const res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  const ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if (ret !== null && (typeof ret === 'object' || typeof ret === 'function')) {
    return ret;
  }
  return res;
}
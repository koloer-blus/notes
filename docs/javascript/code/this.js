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

/**
 * call: 
 * 1. 将函数设置为对象的属性
 * 2. 执行 & 删除这个函数
 * 3. 指定`this`到函数并传入给定的参数执行函数
 * 4. 如果不传参数，默认指向`window`
 * @param {any} context 
 */
Function.prototype._call = function(context = window) {
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

/**
 * apply
 * @param {any} context 
 */
Function.prototype._apply = function(context = window) {
  context.fn = this;
  let res = null;
  if (arguments[1]) {
    res = context.fn(arguments[1]);
  } else {
    res = context.fn();
  }
  delete context;
  return res;
}

/**
 * bind: 
 * 1. 创建一个全新的函数
 * 2. 新函数调用时传入`bind`第一个参数作为运行的`this`
 * 3. 之后的参数作为传递的实参之前的参数
 * @param {any} context 
 */
Function.prototype._bind = function(context) {
  if (typeof this !== 'function') {
    throw Error(`${this} is not a function`);
  }

  const fn = this;
  const args = [...arguments].slice(1);
  const resF = function() {
    return fn.apply(this instanceof resF ? this: context, args.concat(...arguments));
  }
  function tmp() {}
  tmp.prototype = this.prototype;
  resF.prototype = new tmp();
  return resF;
}
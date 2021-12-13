/**
 * 恒定返回 false 的函数。忽略所有的输入参数。
 */
const F = function () { return false; };
/**
 * 恒定返回 true 的函数。忽略所有的输入参数。
 */
const T = function () { return true; };
/**
 * 柯里化函数的参数占位符。允许部分应用于任何位置的参数。
 */
const __ = { '@@function/placeholder': true };
function _isPlaceholder(a) {
  return a !== null
    && typeof a === 'object'
    && a['@@function/placeholder'] === true
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    }
    return fn.apply(this, arguments);
  }
}

/**
   * Optimized internal two-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a)
          ? f2
          : _curry1(function (_b) {
            return fn(a, _b);
          });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f2
          : _isPlaceholder(a)
            ? _curry1(function (_a) { return fn(_a, b) })
            : _curry1(function (_b) {
              return fn(a, _b);
            })
    }
  }
}

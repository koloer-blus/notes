# [回文数](https://leetcode.cn/problems/palindrome-number/)

## 题目描述

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。
 

- 示例 1：

输入：x = 121
输出：true

- 示例 2：

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

- 示例 3：

输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
 

- 提示：

-231 <= x <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/palindrome-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路

### JS字符串翻转
```js
/**

 * @param {number} x

 * @return {boolean}

 */

var isPalindrome = function(x) {
    return `${x}` === `${x}`.split('').reverse().join('')
};
```

### 双指针法
转字符串后首尾指针匹配，通过停止条件判断：

```js
/**

 * @param {number} x

 * @return {boolean}

 */

var isPalindrome = function(x) {
    if (x < 0) return false;
    const str = x + '';
    let s = 0, e = str.length - 1;
    while(s <= e && str[s] === str[e]) {
        s ++;
        e --;
    }
    return s > e

};
```

### 数字求值法
利用取余和整除求得反转后的值，通过是否相等判断回文：
```js
/**

 * @param {number} x

 * @return {boolean}

 */

var isPalindrome = function(x) {
    if (x === 0) return true;
    if (x < 0 || !(x % 10)) return false;
    let temp = x, reverse = 0, count = 0;
    while(temp) {
        reverse = (temp % 10) + reverse* 10;
        temp = Math.floor(temp / 10);
        count ++;
    }
    return reverse === x;

};
```
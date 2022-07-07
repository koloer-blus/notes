# [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

## 题目描述

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 
- 示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

- 示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

- 示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 
### 提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成

>来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路

### 滑动窗口

首先创建一个窗口`temp`，然后在遍历字符串的每一个字符。当字符存在于`temp`中时，移动`temp`(**也就是移动到`temp`中重复元素的下一位，并且添加当前遍历的元素**)。然后用`max`存储每次窗口的最大长度，并且进行和自身的比较即可。

```js
/**

 * @param {string} s

 * @return {number}

 */

var lengthOfLongestSubstring = function(s) {
    let temp = [];
    let max = 0;
    s.split('').forEach((item) => {
        const index = temp.indexOf(item); 
        if (index >= 0) {
            temp = temp.slice(index + 1)
        }
        temp.push(item);
        max = Math.max(max, temp.length);
    })
    return max;
};
```
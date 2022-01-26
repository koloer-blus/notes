# [剑指 Offer 03. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 


限制：

2 <= n <= 100000

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



## 做题思路分析

### 空间换时间

#### 双层循环遍历数组

使用`js`的`find`函数进行遍历，然后**当数组中数组下标对于当前遍历的数值最后一次出现的索引和当前索引不相同的时候**，就得到了重复的值。

```js
var findRepeatNumber = function(nums) {
    return nums.find((v, index) => nums.lastIndexOf(v) !== index);
};
```

> **25 / 25** 个通过测试用例
>
> 状态：*通过*
>
> 执行用时: **4820 ms**
>
> 内存消耗: **44.4 MB**

#### 两次循环遍历数组

```js
var findRepeatNumber = function(nums) {
    nums = nums.sort();
    return nums.find((v, index) => v == nums[index-1])
};
```

> **25 / 25** 个通过测试用例
>
> 状态：*通过*
>
> 执行用时: **64 ms**
>
> 内存消耗: **47 MB**

### 时间换空间

使用`Set`或`Map`存储已存在数据求解

#### Map

> 因为数组长度为n，数值范围为n-1，**所以数组中数值最大小于数组长度**

```js
var findRepeatNumber = function(nums) {
    const map = new Map();
    return nums.find((v, index) => {
        if (map.has(v)) {
            return true;
        }
        map.set(v, nums[v]);
    });
};
```

> **25 / 25** 个通过测试用例
>
> 状态：*通过*
>
> 执行用时: **68 ms**
>
> 内存消耗: **51.2 MB**

#### Set

> 因为只要将数值添加到`Set`中，`Set`没有重复值，便可以以此来判断是否重复

```js
var findRepeatNumber = function(nums) {
    const set = new Set();
    return nums.find((v) => {
        if (set.has(v)) {
            return true;
        }
        set.add(v);
    });
};
```

> **25 / 25** 个通过测试用例
>
> 状态：*通过*
>
> 执行用时: **64 ms**
>
> 内存消耗: **49.5 MB**



## 总结

1. 速度优先级：Set = 两次循环 > Map > 双层循环
2. 内存消耗优先级：双层循环 > 两层循环 > Set > Map
3. 代码理解难易程度优先级：双层循环 = Set > 两次循环 > Map
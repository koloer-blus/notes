# [两数相加](https://leetcode.cn/problems/add-two-numbers/)
## 题目描述
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

- 示例1：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

- 示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]

- 示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 

- 提示：

每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零


>来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路

### 新链表存储

创建一个新的链表，用`carry`表示每一次相加后向**高位进一**，然后去存储每一次`l1.val + l2.val + carry`的值（**注意在不需要进行进位操作时需要重置`carry`**）。最后对最后一个节点是否需要新建节点来保存进位值进行判断即可。

```js
/**

 * @param {ListNode} l1

 * @param {ListNode} l2

 * @return {ListNode}

 */

const addTwoNumbers = function(l1, l2) {
    let head = null;
    let temp = head, carry = 0;
    while(l1 || l2) {
        const sum = (l1 ? l1.val: 0) + (l2? l2.val: 0 )+ carry;
        if(!head) {
            head = temp = new ListNode(0);
        } else {
            temp.next = new ListNode(0);
            temp = temp.next;
        }
        if (sum >= 10) {
            carry = 1;
            temp.val = sum % 10;
        } else {
            carry = 0
            temp.val = sum;
        }
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry) {
        temp.next = new ListNode(1);
    }
    return head;

};
```
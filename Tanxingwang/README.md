
# leetcode 刷题记录



<details>
<summary>模板</summary>

```js
console.log("heelo-")
```
</details>


## 5.10 leetcode

- [x] 21. 合并两个有序链表
- [x] 148. 排序链表
- [ ] 25. K 个一组翻转链表

<details>
<summary>21. 合并两个有序链表</summary>

https://leetcode-cn.com/problems/merge-two-sorted-lists/

```js
var mergeTwoLists = function(l1, l2) {
    // 主要一个头结点保存开始的位置
    let head = p = {}
    while( l1 && l2 ){
        if( l1.val < l2.val ){
            p.next = l1
            p = p.next
            l1 = l1.next
        } else {
            p.next = l2
            p = p.next
            l2 = l2.next
        }
    }
    if( l1 ){
        p.next = l1 
    } else {
        p.next = l2
    }
    return head.next
};
```
</details>

<details>
<summary>148. 排序链表</summary>

https://leetcode-cn.com/problems/sort-list/

```js
var sortList = function(head) {
    var stack = []
    while( head ){
        stack.push( head.val )
        head = head.next
    }
    stack.sort( ( a, b ) => a - b )
    var myHead = new ListNode()
    var node = myHead

    while( stack.length ){
        var newNode = new ListNode( stack.shift() )
        node.next = newNode
        node = newNode
    }
    return myHead.next
};
```
</details>


## 5.10 leetcode
- [x] 70.爬楼梯                        
- [x] 8.字符串转整数(atoi)       
- [ ] 37.解数独

<details>
<summary>70. 爬楼梯</summary>

https://leetcode-cn.com/problems/climbing-stairs/submissions/

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**示例 2：**

    输入： 3
    输出： 3
    解释： 有三种方法可以爬到楼顶。
    1.  1 阶 + 1 阶 + 1 阶
    2.  1 阶 + 2 阶
    3.  2 阶 + 1 阶

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if( n === 0 ) return 0
    if( n === 1 ) return 1
    if( n === 2 ) return 2
    var pre = 1
    var cur = 2
    for( let i = 3; i <= n; i ++ ){
        let res = pre + cur
        pre = cur
        cur = res
    }
    return cur
};
```
</details>


<details>
<summary>8 . 字符串转整数(atoi)</summary>

https://leetcode-cn.com/problems/string-to-integer-atoi/

```js
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim()
    let reg = /^(-|\+)?\d+/
    let res = str.match( reg )
    if( res === null ) return 0
    let num = parseInt( res[0] )
    if( num < Math.pow( -2, 31 ) ) return Math.pow( -2, 31 )
    if( num >= Math.pow( 2, 31 ) ) return Math.pow( 2, 31 ) - 1
    return num
};
```
</details>


## 5.9 leetcode

- [x] 面试题42. 连续子数组的最大和
- [ ] 面试题38. 字符串的排列
- [ ] 面试题51. 数组中的逆序对

<details>
<summary>面试题42. 连续子数组的最大和</summary>

https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = [nums[0]]

    let res = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        dp[i] = nums[i]
        if (dp[i - 1] > 0) {
            dp[i] += dp[i - 1]
        }
        res = Math.max(res, dp[i])
    }
    return res
};
```
</details>


## 5.7 leetcode

- [x] 7. 整数反转
- [ ] 98. 验证二叉搜索树
- [ ]41. 缺失的第一个正数


<details>
<summary>7. 整数反转</summary>

https://leetcode-cn.com/problems/reverse-integer/

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x < 0 ? true : false
    if( isNegative ){
        x = String(x).substr(1).split("").reverse().join("")
    } else {
        x = String(x).split("").reverse().join("")
    }
    if( isNegative ) x = "-" + x
    x = parseInt( x )
    if( x > Math.pow( 2, 31 ) - 1 ){
        return 0
    }
    if( Math.abs( x ) > Math.pow( 2, 31 ) ){
        return 0
    }
    return x
};
```
</details>


<details>
<summary>98. 验证二叉搜索树</summary>

https://leetcode-cn.com/problems/validate-binary-search-tree/

**暂时不对**

```js
var isValidBST = function(root) {
    var fn = ( node, rootVal ) => {
        if( !node ) return true
        let res = true
        if( node.left ){
            res = node.val > node.left.val  && node.left.val < rootVal
            console.log( node.left.val, rootVal, res )
            if( !res ) return res
        }
        if( node.right ){
            res = node.val < node.right.val && node.right.val > rootVal
            console.log( node.right.val )
        }
        return res && fn( node.left, rootVal ) && fn( node.right, rootVal )
    }
    if( !root ) return true
    return fn( root, root.val )
};
```
</details>


## 5.6 - leetcode

- [x] 1290. 二进制链表转整数
- [x] 468. 验证IP地址
- [ ] 1220. 统计元音字母序列的数目

<details>
<summary>1290. 二进制链表转整数</summary>

https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    var arr = []
    while( head ){
        arr.push( head.val )
        head = head.next
    }
    var res = 0
    arr.reverse()
    for( let i = 0; i < arr.length; i ++ ){
        res += arr[i] * 2 ** i
    }
    return res
};
```
</details>


<details>
<summary>468. 验证IP地址</summary>

https://leetcode-cn.com/problems/validate-ip-address/

```js
/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    var ipV4 = ( ip="" ) => {
        var arr = ip.split(".")
        if( arr.length > 4 || arr.length < 4 ) return "Neither"
        for( let i = 0; i < arr.length; i ++ ){
            if( arr[i].length < 1 || arr[i].length > 3 ){
                return "Neither"
            }
            if( arr[i].length > 1 && arr[i][0] == 0 ){
                return "Neither"
            }
            if( /\D/.test( arr[i] ) || parseInt( arr[i] ) > 255 ){
                return "Neither"
            }
        }
        return "IPv4"
    }
    var ipV6 = ( ip ) => {
        var arr = ip.split(":")
        var reg = /^[0-9a-fA-F]{1,4}$/
        if( arr.length > 8 || arr.length < 8 ) return "Neither"
        for( let i = 0; i < arr.length; i ++ ){
            if( !reg.test( arr[i] ) ){
                return "Neither"
            }
        }
        return "IPv6"
    }
    return IP.includes(":") ? ipV6( IP ) : ipV4( IP )
};
```
</details>


## 5.5 - leetcode

- [x] 824.山羊拉丁文
- [x] 02.05 链表求和
- [ ] 23. 合并K个排序链表


<details>
<summary>824.山羊拉丁文</summary>

https://leetcode-cn.com/problems/goat-latin/

```js
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    var arr = [ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ]
    var wordArr = S.split(/\s/)
    for( let i = 0; i < wordArr.length; i ++ ){
        if( !arr.includes( wordArr[i][0] ) ){
            wordArr[i] = wordArr[i].substring( 1 ) + wordArr[i][0]
        }
        wordArr[i] = wordArr[i] + "ma"
        for( let j = 0; j < i + 1; j ++ ){
            wordArr[i] = wordArr[i] + "a"
        }
    }
    return wordArr.join(" ")
};
```
</details>


<details>
<summary>02.05 链表求和</summary>

https://leetcode-cn.com/problems/sum-lists-lcci/

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var flag = 0
    var head = new ListNode(0)
    var go = head
    while( l1 || l2 || flag ){
        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0
        let count = v1  + v2 + flag
        let node = new ListNode( count % 10 )
        flag = count >= 10 ? 1 : 0
        go.next = node
        go = go.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return head.next
};
```
</details>


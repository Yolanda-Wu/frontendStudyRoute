#### 9.回文数（容易）：
##### 题目描述：
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-number

##### 题解：
这道题写过好多次，也记得好多好玩的解法。
需要注意的是，负数必不是回文数，可以直接返回false，其他情况正常判断。
常规解法是取出一半的数字（低n/2位或者低n/2+1位），通过模10就可以得到。

#### Code
```javascript
// 短代码解法
var isPalindrome = function(x) {
    if(x<0) return false;
    return x==String(x).split("").reverse().join("");
};

// 常规解法（100%，98%）
var isPalindrome = function(x) {
    if(x<0||x%10==0&&x!=0) return false;
    let revertedNumber=0;
    while(x>revertedNumber){
        revertedNumber=revertedNumber*10+x%10;
        x=Math.floor(x/10);
    }
    return x==revertedNumber||x==Math.floor(revertedNumber/10);
};
```

#### 5.最长回文子串（中等）：
##### 题目描述：
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring

##### 题解：
本题的常规解法是动态规划（记录所有的可能，并从中找到最长的一个回文子串）。还有一种中心扩展算法，基于不同的回文中心，通过状态转移方程进行扩展。

#### Code
```javascript
// 中心扩展算法：时间复杂度：O（n²），空间复杂度O（1）
var longestPalindrome = function(s) {
    if(!s||s.length<2) return s;
    let start=0;
    let end=0;
    for(let i=0;i<s.length;i++){
        let l1=expandCenter(s,i,i);
        let l2=expandCenter(s,i,i+1);        
        let len=Math.max(l1,l2);
        if(len>end-start){
            start=i-Math.floor((len-1)/2);
            end=i+Math.floor(len/2);
        }
    }
    return s.substring(start,end+1);
};
const expandCenter = function(s,l,r) {
    while(l>=0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return r - l - 1;
}
```

#### 124.二叉树中的最大路径和（困难）：
##### 题目描述：
给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum
##### 题解：
（参考讨论区）在某个节点上去寻找最大路径和，有两种选择，一种是继续向下寻找，另一种是以当前结点为路径中的其中一点去做联络，因此要在这时做出决策，而这两种选择哪种更优，则通过递归至空结点来得到计算值。

#### Code
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max_sum=-Infinity;
    function max_gain(node){
        if(!node) return 0;
        let left_gain=Math.max(max_gain(node.left),0);
        let right_gain=Math.max(max_gain(node.right),0);
        let price_newpath=node.val+left_gain+right_gain;
        max_sum=Math.max(max_sum,price_newpath);
        return node.val+Math.max(left_gain,right_gain);
    }
    max_gain(root);
    return max_sum;
};
```
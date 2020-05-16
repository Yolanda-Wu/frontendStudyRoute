### Leetcode算法打卡

#### 5.09

###### 面试题42.连续子数组最大和

```javascript
var maxSubArray = function(nums) {
    //从数组头开始按位相加,比较结果大小，取max输出
    let max = nums[0];
    for(let i = 0;i < nums.length;i++)
    {
        if(nums[i-1]>0){
            nums[i] += nums[i-1];
        }
        max = Math.max(max,nums[i]);
    }
    return max;
};
```



###### 面试题38.字符串排列***

###### 面试题51.数组逆序对

#### 5.10

###### 70.爬楼梯

```javascript
//斐波那契数列
var climbStairs = function(n) {
    var fn=0;
    var fn_0=1;
    var fn_1=2;
    if(n==1){
        return 1;
    }
    else if(n==2)
    {
        return 2;
    }
    else
    {
        for(i=3;i<=n;i++)
        {
            fn=fn_0+fn_1;
            fn_0=fn_1;
            fn_1=fn;
        }
        return fn;
    }
};
```



###### 8.字符串转整数

*parseInt(string,radix) 解析一个字符串并返回整数*

```javascript
var myAtoi = function(str) {
    const number = parseInt(str,10);
    const Max = Math.pow(2,31)-1;
    const Min = Math.pow(-2,31);
    if(isNaN(number)){//无法转换返回0
        return 0;
    }
    //超出范围分情况讨论
    if(number<Min)
    {return Min}
    if(number>Max)
    {return Max}
    return number;
};
```



###### 37.解数独

#### 5.11

###### 21.合并两个有序链表

```javascript
  var mergeTwoLists = function(l1, l2) {
      let curr = new ListNode();
      let head = curr;
      //判断是否为空
      //如果不是，从头遍历 判断哪个值小，赋给合并链表
      while(l1!== null && l2 !==null){
          if(l1.val<l2.val)
          {
              curr.next = l1;
              l1 = l1.next;
          }
          else
          {
              curr.next = l2;
              l2 = l2.next
          }
          curr = curr.next;
      }
      //如果有空链表，直接返回另一个链表或空
      if(l1==null){
          curr.next = l2;
      }
      if(l2==null){
          curr.next = l1;
      }
      return head.next;
   };
```



###### 148.排序链表

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    var header=this
    if(head==null)
    {
        return head;
    }
    //将当前节点与后面相比较，后一个比较小则调换节点值顺序
    //同时移动curr
    let curr = head;
    while(curr!=null)
    {
        curr = head;
    //设定i作为标志，若遍历时没经历排序，则链表已经是有序排列
        let i = 0;
    while(curr.next != null){
        if(curr.val>curr.next.val){
            let temp = curr.next.val;
            curr.next.val = curr.val;
            curr.val = temp;
            i++;
            }
        curr = curr.next;
        }
        if(i==0){
            break;
        }
    }
    return head;
};
```



###### 面试题24.反转链表

```javascript
//链表如下：n1→..→nk-1→nk→nk+1←...←nm

//反转后希望nk+1的下一个结点为nk

//所以nk.next.next=nk

var reverseList = function(head) {
    var head = head;
    if(head==null||head.next==null)
    return head;
    var pre = reverseList(head.next);//递归之后从后向前开始转向
    head.next.next = head;
    head.next = null;
    return pre;
};
```

###### 25.k个一组翻转链表

```javascript
var reverseKGroup = function(head, k) {
    let curr = head;
    // curr指向k节点后的节点
    for(var i = 0;i<k&&curr!=null;i++){
        curr = curr.next;
    }
    // 足够k个节点时反转
    if(i == k){
        // 递归链接后续k个反转的链表头节点
        curr = reverseKGroup(curr,k);
        for(;i>0;i--){
            // 反转链表
            let next = head.next;//head指针推进
            head.next = curr;
            curr = head;//curr尾随
            head = next;
        }
        head = curr;//head指针回退一位，指向新链表头结点
    }
    return head;
};
```



#### 5.12

###### 13.罗马数字转整数

###### 12.整数转罗马数字

###### 32.最长有效括号

#### 5.13

###### 1360.日期之间隔几天

//暴力转换整数求？

###### 93.复原IP地址

###### 1028.从先序遍历还原二叉树



#### 5.14

###### 617.合并二叉树

###### 102.二叉树层序遍历

###### 145.二叉树后序遍历

#### 5.15

###### 501.二叉树搜索树中的众数

###### 94.二叉树中序遍历

###### 65.有效数字



#### 5.16

###### 面试题39.数组中出现次数超过一半数字

*只想到了暴力解法...先解一半的长度，再逐层遍历数组，有重复字符时候count计数加一，最后对比输出*

*优化题解：哈希表储存、排序法等*

```javascript
var majorityElement = function(nums) {
    let count = 0
    let len = nums.length/2
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count ++
            }
        }
        if (count > len) {
            return nums[i]
        }
        else {
            count = 0
        }
    }
    return null
};

```



###### 面试题63.股票最大利润

```javascript
var maxProfit = function(prices) {
    //两个差值最大的数，小的在前大的在后
    let profits = 0;
    let min = prices[0];
    const len = prices.length;
    for(let i = 1; i < len; i ++) {
        min = Math.min(min, prices[i]);
        profits = Math.max(profits,prices[i]-min)
    }
    return profits;
};
```



###### 233.数字1的个数
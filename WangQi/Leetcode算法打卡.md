## Leetcode算法打卡

#### 5.11

- [x] 21.合并两个有序链表

  ```javascript
  var mergeTwoLists = function(l1, l2) {
      let curr=new ListNode();
      let head = curr;
      while(l1!== null && l2 !==null){
          if(l1.val<l2.val)
          {
              curr.next = l1;
              l1 = l1.next;
          }
          else
          {
              curr.next = l2;
              l2= l2.next
          }
          curr = curr.next;
      }
      if(l1!==null){
          curr.next = l1;
      }
      if(l2!==null){
          curr.next = l2;
      }
      return head.next;
  };
  ```

  

- [ ] 148.排序链表

- [ ] 25.K个一组翻转链表

#### 5.12

- [x] 13.罗马数字转整数
- [x] 12.整数转罗马数字
- [ ] 32.最长有效括号

#### 5.13

- [ ] 1360.日期之间隔几天
- [x] 93.复原IP地址
- [ ] 从先序遍历还原二叉树
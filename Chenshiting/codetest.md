# 每日剑指offer题

##### 1. 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

思路：选取右上/左下角作为起始寻找点 如果大于目标数组则向左走反之向下走

```js
function Find(target, array)
{
  // write code here
  const n = array.length,
    m = array[0].length;
  let row = n - 1,
    col = 0;
  if (m === 0 && n === 0) {
    return false;
  }
  while (row >= 0 && col <= m - 1) {
    if (array[row][col] > target) {
      row--;
    } else if (array[row][col] < target) {
      col++;
    } else return true;
  }
  return false; 
}
```

##### **2.请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy**

使用正则表达式判断

```js
function replaceSpace(str) {
  // write code here
  return str.replace(/\s/g, '%20');
}
```

##### 3.输入一个链表，按链表从尾到头的顺序返回一个ArrayList

unshift:将一个元素添加到数组开头

```js
function printListFromTailToHead(head) {
  // write code here
  const res = [];
  let pNode = head;
  while (pNode !== null) {
    res.unshift(pNode.val);
    pNode = pNode.next;
  }
  return res;
}
```


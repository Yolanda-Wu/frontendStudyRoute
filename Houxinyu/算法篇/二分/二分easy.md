# 二分的easy系列

1. 二分查找704

   二分查找的概念：

   > 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
   >
   >
   > 示例 1:
   >
   > 输入: nums = [-1,0,3,5,9,12], target = 9
   > 输出: 4
   > 解释: 9 出现在 nums 中并且下标为 4
   > 示例 2:
   >
   > 输入: nums = [-1,0,3,5,9,12], target = 2
   > 输出: -1
   > 解释: 2 不存在 nums 中因此返回 -1

   ```javascript
   var search = function (nums, target) {
       if (nums.length === 1) return nums[0] === target ? 0 : -1
       let start = 0, end = nums.length - 1, mid = Math.floor((start + end) / 2)
       while (start <= end) {
           if (nums[mid] === target) {
               return mid
           } else if (nums[mid] < target) {
               start = mid + 1
               mid = Math.floor((start + end) / 2)
           } else if (nums[mid] > target) {
               end = mid - 1
               mid = Math.floor((start + end) / 2)
           }
       }
       return -1
   };
   ```

   
# 双指针的easy系列

1. 二分查找704

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
function search(nums, target) {
    if (nums.length === 1) return nums[0] === target ? 0 : -1
    let i = 0, j = nums.length - 1
    while(i <= j){
        if(nums[i] === target){
            return i
        }else if(nums[j] === target){
            return j
        }else{
            i++
            j--
        }
    }
    return -1 
}
```

2. 两个数组的交集349

> 给定两个数组，编写一个函数来计算它们的交集。
>
> 示例 1:
>
> 输入: nums1 = [1,2,2,1], nums2 = [2,2]
> 输出: [2]
> 示例 2:
>
> 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
> 输出: [9,4]
> 说明:
>
> 输出结果中的每个元素一定是唯一的。
> 我们可以不考虑输出结果的顺序。

```javascript
var intersection = function (nums1, nums2) {
    let i = 0, j = 0, res = []
    nums1 = Array.from(new Set(nums1.sort((a, b) => a - b)))
    nums2 = Array.from(new Set(nums2.sort((a, b) => a - b)))
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++
        } else if (nums1[i] > nums2[j]) {
            j++
        } else {
            res.push(nums1[i])
            i++
            j++
        }
    }
    return res
};
```


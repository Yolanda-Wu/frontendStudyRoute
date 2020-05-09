/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let dp = 0, res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        /* 若前面的最大子数组小于0则舍去 */
        dp = Math.max(nums[i], dp + nums[i]);
        /* 每次取最大的 */
        res = res > dp ? res : dp;
    }
    return res;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])//6
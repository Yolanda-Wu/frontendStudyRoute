/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 1, len = nums.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
        map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1);
        if (map.get(nums[i]) > Math.floor(len / 2)) {
            return nums[i]
        }
    }
};
console.log(majorityElement([3, 2, 3]))
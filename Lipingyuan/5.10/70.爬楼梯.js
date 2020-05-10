/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = 1, pre1 = 1, pre2 = 1;
    for (let i = 2; i <= n; i++) {
        dp = pre1 + pre2;
        [pre1, pre2] = [pre2, dp];
    }
    return dp;
};
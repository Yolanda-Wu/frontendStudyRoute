/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let dp = [];
    let x = 0, y = 0, n = s.length;
    for (let i = n - 2; i >= 0; i--) {
        dp[i] = [];
        dp[i][i] = true;
        for (let j = i + 1; j < n; j++) {
            /* 比较头和尾是否匹配，后面判断是否包含的片段是否符合 */
            dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);
            if (dp[i][j] && y - x < j - i) {
                x = i; y = j;
            }
        }
    }
    return s.slice(x, y + 1);
};
// @lc code=end


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let str = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let index = 0, res = '';
    /* 贪心 */
    while (index < 13) {
        while (num >= nums[index]) {
            num -= nums[index];
            res += str[index];
        }
        index++;
    }
    return res;
};
console.log(intToRoman(58));//LVIII
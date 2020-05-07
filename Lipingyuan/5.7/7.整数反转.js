/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNagtive = true;
    if (x < 0) {
        isNagtive = false;
        x = -x;
    }
    x = x.toString().split('').reverse().join('');
    x = isNagtive ? parseInt(x) : -1 * parseInt(x);

    let max = Math.pow(2, 31) - 1;
    let min = -1 * Math.pow(2, 31);
    if (x < min || x > max)
        return 0;
    return x;
};
console.log(reverse(1534236469))
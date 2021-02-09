/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/* 递归 */
var add = function (a, b) {
    if (b == 0) return a;
    return add(a ^ b, (a & b) << 1);
};

/* 非递归 */
var add = function (a, b) {
    let carry = 0, xor = 0;
    while (b) {
        xor = a ^ b;//不进位
        carry = (a & b) << 1;//进位
        //没有进位的结果+进位代表的数值
        a = xor; b = carry;
    }
    return a;
}

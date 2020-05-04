/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
    let C = A ^ B;
    C = C.toString(2);//转换为二进制
    let res = 0;
    for (let i = 0; i < C.length; i++) {
        if (C[i] === '1') res++;
    }
    return res;
};
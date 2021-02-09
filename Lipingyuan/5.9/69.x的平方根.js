/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (!x) return 0;
    let i = 0, j = x;
    while (i <= j) {/* 退出条件i=j+1 */
        let m = i + Math.floor(j - i >> 1);
        let mm = Math.floor(x / m);
        if (mm == m)
            return m;
        else if (mm > m)
            i = m + 1;
        else
            j = m - 1;
    }
    return j;
};

console.log(mySqrt(8))
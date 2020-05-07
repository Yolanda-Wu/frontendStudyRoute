// /**
//  * @param {number[]} start1
//  * @param {number[]} end1
//  * @param {number[]} start2
//  * @param {number[]} end2
//  * @return {number[]}
//  */
// var intersection = function (a, b, c, d) {
//     if (Math.min(a[0], b[0]) > Math.max(c[0], d[0])
//         || Math.max(a[0], b[0]) < Math.min(c[0], d[0])
//         || Math.min(a[1], b[1]) > Math.max(c[1], d[1])
//         || Math.max(a[1], b[1]) < Math.min(c[1], d[1])) {
//         return [];
//     }
//     /* 判断是否在同一直线 */
//     function isInLine(x, y) {
//         let s, e;
//         for ([s, e] of [[a, b], [c, d]]) {
//             let minx = Math.min(s[0], e[0]);
//             let maxx = Math.max(s[0], e[0]);
//             let miny = Math.min(s[1], e[1]);
//             let maxy = Math.max(s[1], e[1]);
//             if (x < minx || x > maxx || y > maxy || y < miny)
//                 return false;
//         }
//         return true;
//     }
//     /* 计算叉乘值 */
//     function getCross(s, e1, e2) {
//         let x1, y1, x2, y2;
//         [x1, y1] = [e1[0] - s[0], e1[1] - s[1]];
//         [x2, y2] = [e2[0] - s[0], e2[1] - s[1]];
//         return x1 * y2 - x2 * y1;
//     }
//     let acb = getCross(a, c, b);
//     let adb = getCross(a, d, b);
//     let cad = getCross(c, a, b);
//     let cbd = getCross(c, b, d);
//     /* 将线段端点顺序排好 */
//     if (a[0] > b[0] || a[0] == b[0] && a[1] > b[1])
//         [a, b] = [b, a];
//     if (c[0] > d[0] || c[0] == d[0] && c[1] > d[1])
//         [c, d] = [d, c];
//     /* 叉乘方向都相反则有交点 */
//     if (acb * adb <= 0 && cad * cbd <= 0) {
//         let x = null, y = null;
//         let k1 = (b[1] - a[1]) / (b[0] - a[0]);
//         let b1 = (b[0] * a[1] - a[0] * b[1]) / (b[0] - a[0]);
//         let k2 = (d[1] - c[1]) / (d[0] - c[0]);
//         let b2 = (d[0] * c[1] - c[0] * d[1]) / (d[0] - c[0]);
//         /* 重叠 */
//         if (k1 === k2) {
//             let xx, yy;
//             for ([xx, yy] of [a, b, c, d]) {
//                 if (isInLine(xx, yy)) {
//                     if (x == null && y == null || xx < x || xx == x && yy < y) {
//                         x = xx, y = yy;
//                     }
//                 }
//             }
//         }
//         else if (k1 === Infinity) {
//             x = a[0]; y = k2 * x + b2;
//         }
//         else if (k2 === Infinity) {
//             x = c[0]; y = k1 * x + b1;
//         }
//         else {
//             x = (b2 - b1) / (k1 - k2);
//             y = k1 * x + b1;
//         }
//         return [x, y];
//     } else {
//         return [];
//     }
// };
// console.log(Math.min(1, 2, -1, 4))
var intersection = function (a, b, c, d) {
    /* 排除区间不相交的情况 */
    if (Math.max(a[0], b[0]) < Math.min(c[0], d[0]) ||
        Math.max(c[0], d[0]) < Math.min(a[0], b[0]) ||
        Math.max(a[1], b[1]) < Math.min(c[1], d[1]) ||
        Math.max(c[1], d[1]) < Math.min(a[1], b[1])) {
        return [];
    }
    /* 获取向量叉乘值 sx x sy */
    function getCross(s, x, y) {
        let x1, y1, x2, y2;
        [x1, y1] = [x[0] - s[0], x[1] - s[1]];
        [x2, y2] = [y[0] - s[0], y[1] - s[1]];
        return x1 * y2 - x2 * y1;
    }
    let acb = getCross(a, c, b);//ac x ab
    let adb = getCross(a, d, b);//ad x ab
    let cad = getCross(c, a, d);//ca x cd
    let cbd = getCross(c, b, d);//cb x cd
    /*有交点 b,c在ab两侧 ab在cd两侧*/
    if (acb * adb <= 0 && cad * cbd <= 0) {
        /* 统一端点顺序 */
        if (a[0] > b[0] || a[0] == b[0] && a[1] > b[1]) [a, b] = [b, a];
        if (c[0] > d[0] || c[0] == d[0] && c[1] > d[1]) [c, d] = [d, c];
        /* k = (y2 - y1) / (x2 - x1) */
        let k1 = (b[1] - a[1]) / (b[0] - a[0]);
        let k2 = (d[1] - c[1]) / (d[0] - c[0]);
        /* b = (x2 * y1 - x1 * y2) / (x2 - x1) */
        let b1 = (b[0] * a[1] - a[0] * b[1]) / (b[0] - a[0]);
        let b2 = (d[0] * c[1] - c[0] * d[1]) / (d[0] - c[0]);
        /* 判断斜率相同情况下x,y是否在两条线段上 */
        function isInLine(x, y) {
            for (let [s, e] of [[a, b], [c, d]]) {
                /* 求边界值 */
                let [maxx, maxy] = [Math.max(s[0], e[0]), Math.max(s[1], e[1])];
                let [minx, miny] = [Math.min(s[0], e[0]), Math.min(s[1], e[1])];
                if (x < minx || x > maxx || y < miny || y > maxy)
                    return false;
            }
            return true;
        }
        /* 共线 包括垂直的情况 */
        if (k1 == k2) {
            let x = null, y = null;
            for (let [xx, yy] of [a, b, c, d]) {
                if (isInLine(xx, yy)) {
                    if (x == null && y == null ||
                        xx < x || xx == x && yy < y) {
                        x = xx; y = yy;
                    }
                }
            }
            return [x, y];
        }
        else if (k1 === Infinity) {//ab垂直
            return [a[0], k2 * a[0] + b2];
        }
        else if (k2 === Infinity) {//cd垂直
            return [c[0], k1 * c[0] + b1];
        }
        else {//正常相交情况
            let x = (b2 - b1) / (k1 - k2);
            return [x, x * k1 + b1];
        }
    }
    /* 没有交点 */
    return [];
};
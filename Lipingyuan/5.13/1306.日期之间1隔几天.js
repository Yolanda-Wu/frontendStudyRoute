/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */

function getDay(date) {
    let [y, m, d] = date.split('-');
    y = parseInt(y);
    m = parseInt(m);
    d = parseInt(d);
    let month = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let ans = 0;
    for (let i = 1971; i < y; i++) {
        if (i % 400 == 0 || i % 100 && i % 4 == 0)
            ans += 366;
        else
            ans += 365;
    }
    if (y % 400 == 0 || y % 100 && y % 4 == 0) month[2] = 29;
    for (let i = 1; i < m; i++) {
        ans += month[i];
    }
    ans += d;
    console.log(ans)
    return ans;
}

var daysBetweenDates = function (date1, date2) {
    return Math.abs(getDay(date2) - getDay(date1));
};
let res = daysBetweenDates("2020-1-31", "2019-12-31")
console.log(res)
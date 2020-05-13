var hasAlternatingBits = function (n) {
    let x = Math.floor(n % 2);
    n = Math.floor(n / 2);
    while (n) {
        if (n % 2 == x) {
            return false;
        } else {
            x = n % 2;
            n = Math.floor(n / 2);
        }
    }
    return true;
};
console.log(hasAlternatingBits(7));
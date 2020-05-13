/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let map = new Map();
var encode = function (longUrl) {
    /* 将所有/替换为$^&，后面接上随机值 */
    let newUrl = longUrl.replace(/\//g, "$^&");
    newUrl = newUrl + Math.random();
    map.set(newUrl, longUrl);
    return newUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return map.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

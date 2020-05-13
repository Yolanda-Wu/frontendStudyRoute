/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX = Math.pow(2, 31) - 1;
  let tmp = x.toString().split('');
  let isNagetive = tmp[0] === '-' ? true : false;
  if (isNagetive) tmp.shift();
  let result = parseInt(
    isNagetive ? '-' + tmp.reverse().join('') : tmp.reverse().join('')
  );

  return result > MAX || result < -MAX ? 0 : result;
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let a = String(n)
  let max = 0
  for (let i = 0; i < a.length; i++){
    let res = Number(a.slice(0, i) + a.slice(i+1))
    max = res>max ? res : max
  }
  return max
}

module.exports = {
  deleteDigit
};

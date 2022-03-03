const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  encodStr = ''
  for (let i = 0; i < str.length; i++){
    let symbol = str[i]
    let count = 1
    while (symbol === str[i+1]){
      i++
      count++
    }
    let s = count === 1 ? '' : `${count}`
    encodStr = encodStr + s +symbol
  }
  return encodStr
}

module.exports = {
  encodeLine
};

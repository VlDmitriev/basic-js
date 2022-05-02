const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  let stringRes = ''
  const repeat = options.repeatTimes ? options.repeatTimes : 1
  const sep = options.separator ? options.separator : '+'
  const addition = options.addition !== undefined ? String(options.addition) : ''
  const additionRepeat = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|'

  for (let i = 0; i < repeat; i++) {
    if (addition) {
      stringRes += i ===0? str + creatStr() : sep + str + creatStr()
    }else{
      stringRes += i === 0 ? str : sep + str
    }
  }

  return stringRes

  function creatStr() {
    let string = ''
    for (let k = 0; k < additionRepeat; k++) {
      string += k + 1 === additionRepeat ? addition : addition + additionSeparator
    }
    return string
  }
}

module.exports = {
  repeater
};

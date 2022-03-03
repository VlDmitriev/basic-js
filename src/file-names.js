const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //throw new NotImplementedError('Not implemented');
  let fileNames = []
  for (let i = 0; i < names.length; i++){
    let k = '';
    let index = 0
    while (fileNames.indexOf(`${names[i]}${k}`) !== -1){
      index++
      k = `(${index})`
    }
    fileNames.push(`${names[i]}${k}`)
  }
  return fileNames
}

module.exports = {
  renameFiles
};
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  let dreamName = ''
  if (typeof(members) !== 'object' || members === null){return false}
  for (let i = 0; i < members.length; i++){
    if (typeof(members[i]) === 'string'){
      let name = members[i].trim()
      dreamName = dreamName + name.slice(0, 1)
    }
  }
  return dreamName.toUpperCase().split('').sort().join('')
}

module.exports = {
  createDreamTeam
};

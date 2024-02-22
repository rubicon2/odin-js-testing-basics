/* eslint-disable */
const loopInt = require('./loopInt');

const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const lowerCodeStart = 97;
const upperCodeStart = 65;

function caesar(str, shift) {
  const shiftedChars = [];
  for (let i = 0; i < str.length; i += 1) {
    // If the character is whitespace, a digit or smybol, just add it onto shifted chars and go onto the next char
    if (/[\d\W\s]/.test(str[i])) {
      shiftedChars.push(str[i]);
      continue;
    }
    const charCode = str.charCodeAt(i);
    if (charCode < lowerCodeStart) {
      // Return uppercase letter
      shiftedChars.push(
        alphabetUpper[loopInt(0, 26, (charCode % upperCodeStart) + shift)],
      );
    } else {
      // Return lowercase letter
      shiftedChars.push(
        alphabetLower[loopInt(0, 26, (charCode % lowerCodeStart) + shift)],
      );
    }
  }
  return shiftedChars.join('');
}

module.exports = caesar;

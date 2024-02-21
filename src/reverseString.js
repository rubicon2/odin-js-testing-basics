function reverseString(str) {
  if (typeof str === 'object')
    throw new Error('Argument was an object. Provide a string-able value.');
  return Array.from(str.toString()).reverse().join('');
}

module.exports = reverseString;

/* eslint-disable no-restricted-syntax -- airbnb rule appears to be outdated */
function analyzeArray(arr) {
  // If given emtpy array, return this
  if (!arr.length)
    return {
      average: null,
      min: null,
      max: null,
      length: 0,
    };
  // Otherwise calculate stats
  const arrInfo = {
    average: 0,
    min: Number.POSITIVE_INFINITY,
    max: Number.NEGATIVE_INFINITY,
    length: 0,
  };
  for (const number of arr) {
    arrInfo.average += number;
    arrInfo.length += 1;
    if (number < arrInfo.min) arrInfo.min = number;
    if (number > arrInfo.max) arrInfo.max = number;
  }
  arrInfo.average /= arrInfo.length;
  return arrInfo;
}

module.exports = analyzeArray;

function capitalized(str) {
  if (typeof str === 'number') return `${str}`;
  if (typeof str === 'string') {
    if (str.length <= 1) return str.toUpperCase();
    return str[0].toUpperCase() + str.slice(Math.min(1));
  }
}

module.exports = capitalized;

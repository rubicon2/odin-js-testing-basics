const caesar = require('./caesar');

test('characters should loop from end of alphabet to the start', () => {
  expect(caesar('z', 1)).toBe('a');
});

test('Letters should loop around from start of alphabet to the end', () => {
  expect(caesar('a', -1)).toBe('z');
});

test('caesar should be dbftbs', () => {
  expect(caesar('caesar', 1)).toBe('dbftbs');
});

test('Caesar should be Dbftbs (note the capitalization)', () => {
  expect(caesar('Caesar', 1)).toBe('Dbftbs');
});

test('Upper case letters should loop around to the start of the alphabet', () => {
  expect(caesar('Z', 2)).toBe('B');
});

test('negative shift should work', () => {
  expect(caesar('b', -1)).toBe('a');
});

test('non-word characters throw an error', () => {
  expect(() => caesar('*', 1)).toThrow();
});

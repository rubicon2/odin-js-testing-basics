const caesar = require('./caesar');

test('a single character gets shifted correctly', () => {
  expect(caesar('a', 2)).toBe('c');
});

test('works with upper case and lower case characters', () => {
  expect(caesar('Gg', 1)).toBe('Hh');
});

test('characters should loop from end of alphabet to the start', () => {
  expect(caesar('z', 1)).toBe('a');
});

test('characters should loop from the stard of the alphabet to the end', () => {
  expect(caesar('a', -1)).toBe('z');
});

test('forward shift should work correctly', () => {
  expect(caesar('abcdefg', 2)).toBe('cdefghi');
});

test('backward shift should work correctly', () => {
  expect(caesar('cdefghi', -2)).toBe('abcdefg');
});

test('mixed character case should work', () => {
  expect(caesar('AbCDe', -1)).toBe('ZaBCd');
});

test('works with whitespace', () => {
  expect(caesar('cheese cake', -1)).toBe('bgddrd bzjd');
});

test('works with punctuation', () => {
  expect(caesar('cheese, cake!', -1)).toBe('bgddrd, bzjd!');
});

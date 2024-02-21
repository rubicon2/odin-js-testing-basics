const reverseString = require('./reverseString');

test('reverse a string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('reverse a string of length 1', () => {
  expect(reverseString('a')).toBe('a');
});

test('return a string of length zero unchanged', () => {
  expect(reverseString('')).toBe('');
});

test('if provided a number, convert to string then reverse', () => {
  expect(reverseString(987)).toBe('789');
});

test('if provided an object, throw an error', () => {
  expect(() =>
    reverseString({ firstname: 'billy', surname: 'borgan' }),
  ).toThrow();
});

test('if provided an array, throw an error', () => {
  expect(() => {
    reverseString(['0', '1', '2']).toThrow();
  });
});

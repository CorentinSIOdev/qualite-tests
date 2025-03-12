const inverse = require('../exo3');

describe('inverse()', () => {
  test('inverse "abc" → "cba"', () => {
    expect(inverse('abc')).toBe('cba');
  });

  test('inverse "" → ""', () => {
    expect(inverse('')).toBe('');
  });

  test('inverse "a" → "a"', () => {
    expect(inverse('a')).toBe('a');
  });
});

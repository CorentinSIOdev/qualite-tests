const { somme, estPair, factorielle } = require('../exo1');

describe('Tests utils.js', () => {
  test('somme(2,3) = 5', () => {
    expect(somme(2, 3)).toBe(5);
  });

  test('estPair(4) = true', () => {
    expect(estPair(4)).toBe(true);
  });

  test('estPair(5) = false', () => {
    expect(estPair(5)).toBe(false);
  });

  test('factorielle(4) = 24', () => {
    expect(factorielle(4)).toBe(24);
  });

  test('factorielle(0) = 1', () => {
    expect(factorielle(0)).toBe(1);
  });

  test('factorielle négatif → throw', () => {
    expect(() => factorielle(-1)).toThrow("Nombre négatif interdit");
  });
});

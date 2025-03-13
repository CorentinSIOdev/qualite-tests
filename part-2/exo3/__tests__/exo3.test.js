const convertirMontant = require('../exo3');

test('convertirMontant(100, 1.2) retourne 120', () => {
  expect(convertirMontant(100, 1.2)).toBe(120);
});

test('taux ou montant négatif doit lever une erreur', () => {
  expect(() => convertirMontant(-100, 1.2)).toThrow();
  expect(() => convertirMontant(100, -1.2)).toThrow();
  expect(() => convertirMontant(-100, -1.2)).toThrow();
});

test('valeurs extrêmes', () => {
  expect(() => convertirMontant(0, 1.2)).not.toThrow();
  expect(convertirMontant(0, 1.2)).toBe(0);

  expect(() => convertirMontant(1e9, 1.2)).not.toThrow();
  expect(convertirMontant(1e9, 1.2)).toBeCloseTo(1.2e9);
});

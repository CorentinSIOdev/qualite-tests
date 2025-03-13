const calculerTVA = require('../exo5');

test('calcul correct de la TVA', () => {
  expect(calculerTVA(100, 0.2)).toBe(120);
});

test('pas d’erreur avec modifications accidentelles', () => {
  expect(calculerTVA(200, 0.1)).toBeCloseTo(220); 
});

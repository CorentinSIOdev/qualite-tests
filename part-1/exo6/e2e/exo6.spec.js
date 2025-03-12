const { test, expect } = require('@playwright/test');

test('Performance : page chargée en moins de 3s', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://jsonplaceholder.typicode.com/users');
  const duration = Date.now() - start;

  console.log(`Temps de chargement : ${duration}ms`);
  expect(duration).toBeLessThan(3000);
});

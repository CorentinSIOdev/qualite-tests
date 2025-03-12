const { test, expect } = require('@playwright/test');

test('Formulaire de connexion fonctionne correctement', async ({ page }) => {
  await page.goto('http://localhost:3000/login.html');

  const emailInput = page.locator('input[type="email"]');
  const passwordInput = page.locator('input[type="password"]');
  const submitBtn = page.locator('button[type="submit"]');

  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await emailInput.fill('test@example.com');
  await passwordInput.fill('supersecret');
  await submitBtn.click();

  await expect(page).toHaveURL(/dashboard\.html/);
});
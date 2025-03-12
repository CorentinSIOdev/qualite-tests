const { test, expect } = require('@playwright/test');

test('Formulaire de connexion fonctionne correctement', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  const usernameInput = page.locator('#username');
  const passwordInput = page.locator('#password');
  const submitBtn = page.locator('button[type="submit"]');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  await usernameInput.fill('tomsmith');
  await passwordInput.fill('SuperSecretPassword!');
  await submitBtn.click();

  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

  const successMsg = page.locator('.flash.success');
  await expect(successMsg).toContainText('You logged into a secure area!');
});

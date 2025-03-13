import { test, expect } from '@playwright/test';
import path from 'path';

const localFile = (filename) => {
  const filePath = path.resolve(__dirname, '../login.html');
  return `file://${filePath}`;
};

test.describe('Formulaire de connexion (mock HTML)', () => {
  test('échoue avec mauvais mot de passe, puis réussit avec le bon', async ({ page }) => {
    await page.goto(localFile('../login.html'));

    await page.fill('#email', 'user@example.com');
    await page.fill('#password', 'wrongpass');
    await page.click('button[type=submit]');

    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Identifiants invalides');

    await page.fill('#password', 'secure123');
    await page.click('button[type=submit]');

    const redirectedTo = await page.getAttribute('body', 'data-redirected-to');
    expect(redirectedTo).toBe('/dashboard.html');
  });
});

import { test, expect } from '@playwright/test';


test('Calcula IMC corretamente', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.fill('input[name="sex"]', 'F');
  await page.fill('input[name="alt"]', '1.70');
  await page.fill('input[name="weight"]', '50');

  await page.click('button');

  await expect(page.locator('.result-container')).toContainText('17.30');
  await expect(page.locator('text=Classificação')).toContainText('abaixo do peso');
});

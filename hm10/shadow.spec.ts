import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/shadowdom');
  await page.locator('#buttonGenerate').click();
  await page.locator('#buttonCopy').click();

  await expect(page.locator('#editField')).not.toBeEmpty();
});
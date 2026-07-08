import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');
  await page.getByRole('button', { name: 'Button Triggering AJAX Request' }).click();
  await expect(page.locator('#content')).toBeVisible({ timeout: 20000 });
});
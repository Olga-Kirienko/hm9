import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');
  
  const row = page.locator('table#table1 tbody tr').filter({ hasText: 'Doe' });

  await expect(row.getByRole('cell', { name: 'Jason' })).toHaveText('Jason');
  await expect(row.getByRole('cell', { name: '$100.00' })).toHaveText('$100.00');
});
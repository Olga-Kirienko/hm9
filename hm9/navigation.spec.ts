import { test, expect } from '@playwright/test';

  test('Заходим на главную страницу', async ({page}) => {
    await page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded' });

     await expect(page).toHaveTitle('demosite');
  });

  test('Задача со *', async ({ page}) => {
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('.rc-tree-switcher').click();
    await expect(page.getByText('Desktop')).toBeVisible();
    await page.locator('.rc-tree-switcher.rc-tree-switcher_close').first().click();
    await expect(page.getByText('Notes')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Select Desktop' }).check(); // тут проходит тест с check, ловушки нет
    //await page.getByRole('checkbox', { name: 'Select Desktop' }).click(); // запасной план на случай если check не сработал бы
    await expect(page.locator('#result')).toContainText('desktop');
    await expect(page.locator('#result')).toContainText('notes');
    await expect(page.locator('#result')).toContainText('commands');
  })



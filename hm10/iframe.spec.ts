import { test, expect } from '@playwright/test';

// тест не проходит из-за отключения сайта
test.skip('test1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  const frame = page.frameLocator('#mce_0_ifr');
  // уточнить какой тут правильный локатор
  await frame.locator('#tinymce').fill('Hello from the inside!');

  await expect(frame.locator('#tinymce')).toContainText('Hello from the inside!');  
});


// тест успешно проходит
test('test2', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');
  await expect(page.frameLocator('#frame1').getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
  await expect(page.frameLocator('#frame2').getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
});
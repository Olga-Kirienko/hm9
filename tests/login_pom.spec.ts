import { test, expect } from '../fixtures/fixtures';

test('Successful login', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.fillUsername('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.submit();

  await expect(loginPage.page).toHaveURL(
    'https://www.saucedemo.com/inventory.html'
  );
});

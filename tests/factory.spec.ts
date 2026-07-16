import { test, expect } from '../fixtures/fixtures';
import { createRandomUser } from '../factories/userFactory';

test('Unsuccessful login', async ({ loginPage }) => {
  const newUser = createRandomUser();

  await loginPage.navigate();
  await loginPage.fillUsername(newUser.username);
  await loginPage.fillPassword(newUser.password);
  await loginPage.submit();

  await expect(
    loginPage.page.locator('.error-message-container')
  ).toContainText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});

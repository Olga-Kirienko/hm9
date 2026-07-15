import { test, expect } from '../fixtures/fixtures';

const credentials = [
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Sorry, this user has been locked out.',
  },
  {
    username: 'standard_user',
    password: 'wrong_password',
    expectedError:
      'Epic sadface: Username and password do not match any user in this service',
  },
  {
    username: '',
    password: 'secret_sauce',
    expectedError: 'Epic sadface: Username is required',
  },
];

for (const data of credentials) {
  test(`Тест логина для пользователя: ${data.username}`, async ({
    loginPage,
  }) => {
    // Ваш код с использованием data.username, data.password и data.expectedError
    await loginPage.navigate();
    await loginPage.fillUsername(data.username);
    await loginPage.fillPassword(data.password);
    await loginPage.submit();
    await expect(
      loginPage.page.locator('.error-message-container')
    ).toContainText(data.expectedError);
  });
}

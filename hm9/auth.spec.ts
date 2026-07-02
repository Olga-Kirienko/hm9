import { test, expect } from '@playwright/test';

test.describe('Авторизация', () => {
    
    test.beforeEach( async ({ page}) => {
        await page.goto('/');
    });

    test('Успешный логин', async ({ page }) => {
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL('/inventory.html');
        await expect(page.locator('[data-test="title"]')).toBeVisible();
    });

    test('Попытка залогиниться с неверным паролем', async ({ page }) => {
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_user');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
    });

});


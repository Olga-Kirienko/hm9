import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Считаем товары в корзине', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.fillUsername('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.submit();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCart();
  const itemsCount = await inventoryPage.header.getCartItemsCount();
  await expect(itemsCount).toBe(2);
});

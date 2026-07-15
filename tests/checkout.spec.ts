import { test } from '@playwright/test';
import { ShopFacade } from '../facades/ShopFacade';

test('testing Facade pattern', async ({ page }) => {
  const shopFacade = new ShopFacade(page);

  await shopFacade.loginAndAddItemToCart('standard_user', 'secret_sauce');

  //код для инициализации  и тестирования CartPage
});

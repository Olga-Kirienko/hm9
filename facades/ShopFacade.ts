import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { Page } from '@playwright/test';

export class ShopFacade {
  private readonly loginPage: LoginPage;
  private readonly inventoryPage: InventoryPage;

  constructor(public readonly page: Page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
  }

  async loginAndAddItemToCart(
    username: string,
    password: string
  ): Promise<InventoryPage> {
    await this.loginPage.navigate();
    await this.loginPage.fillUsername(username);
    await this.loginPage.fillPassword(password);
    await this.loginPage.submit();
    await this.inventoryPage.addToCart();
    return this.inventoryPage;
  }
}

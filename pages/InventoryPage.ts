import { Header } from '../components/Header';
import { type Page, type Locator } from '@playwright/test';

export class InventoryPage {
  readonly header: Header;
  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly addBikeLightButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.addBackpackButton = page.getByTestId(
      'add-to-cart-sauce-labs-backpack'
    );
    this.addBikeLightButton = page.getByTestId(
      'add-to-cart-sauce-labs-bike-light'
    );
  }

  async addToCart() {
    await this.addBackpackButton.click();
    await this.addBikeLightButton.click();
  }
}

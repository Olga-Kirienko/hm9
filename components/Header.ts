import { type Locator, type Page } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly cart: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cart = page.getByTestId('shopping-cart-link');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
  }

  async getCartItemsCount() {
    const text = await this.cartBadge.textContent();
    const number = Number(text);
    return number;
  }
}

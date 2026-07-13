import { type Page, type Locator } from '@playwright/test';

export class ModalWindow {
  readonly page: Page;
  readonly clickMeButton: Locator;
  readonly closeButton: Locator;
  readonly modalContainer: Locator;
  readonly modalBody: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickMeButton = page.locator('#button2');
    this.closeButton = page.getByRole('button', { name: 'Close' });
    this.modalContainer = page.locator('.modal-content');
    this.modalBody = page.locator('.modal-body');
  }

  async goto() {
    await this.page.goto(
      'https://webdriveruniversity.com/Popup-Alerts/index.html'
    );
  }

  async openModalWindow() {
    await this.clickMeButton.click();
  }

  async closeModalWindow() {
    await this.closeButton.click();
  }
}

import { test, expect } from '@playwright/test';
import { ModalWindow } from '../pages/ModalWindow';

test('Check Click Me Button', async ({ page }) => {
  const modalWindow = new ModalWindow(page);

  await modalWindow.goto();
  await modalWindow.openModalWindow();
  await expect(modalWindow.modalContainer).toBeVisible();
  await expect(modalWindow.modalBody).toHaveText(
    'We can inject and use JavaScript code if all else fails! Remember always try to use WebDriver Library method(s) first such as WebElement.click(). (The Selenium development team have spent allot of time developing WebDriver functions etc).'
  );
  await modalWindow.closeModalWindow();
  await expect(modalWindow.modalContainer).toBeHidden();
});

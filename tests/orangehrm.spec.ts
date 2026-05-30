import { test, expect } from '@playwright/test';

test('Orange HRM Login', async ({ page }) => {
 
  test.setTimeout(60000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: /Login/i }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
});
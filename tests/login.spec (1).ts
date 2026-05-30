import { test, expect } from '@playwright/test';

test('Vtiger invalid Login', async ({ page }) => { 
 
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin123");
  await page.locator("//input[@name='Login']").click(); 
  await expect(page).toHaveTitle(/vtiger CRM/);
});


test('Vtiger valid Login', async ({ page }) => { 
 
  await page.goto('http://localhost:100');
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.locator("//input[@name='Login']").click(); 
  await page.locator("//a[@href='index.php?module=Users&action=Logout']").click();
  await expect(page).toHaveTitle(/vtiger CRM/);
});



test('Vtiger create lead', async ({ page }) => { 
 
  await page.goto('http://localhost:100');
  //await page.waitForTimeout(3000);
  await page.locator("//input[@name='user_name']").fill("admin");
  await page.locator("//input[@name='user_password']").fill("admin");
  await page.locator('//select[@name="login_theme"]').selectOption({ label: 'orange' });
  //await page.waitForTimeout(5000);
  await page.locator("//input[@name='Login']").click(); 
  //await page.waitForTimeout(3000);
  await page.locator("//a[text()='New Lead']").click();

  await page.locator("//select[@name='salutationtype']").selectOption({ label: 'Mr.' });
   await page.locator("//input[@name='firstname']").fill("Narendra");
  await page.locator("//input[@name='lastname']").fill("Modi");
  await page.locator("//input[@name='company']").fill("BJP");

  await page.locator("//input[@value='T']").check();
  // await page.waitForTimeout(7000);
  await page.locator("(//input[@name='button'])[3]").click(); 

  await page.locator("(//a[text()='Leads'])[1]").click();
  //await page.waitForTimeout(3000);
  await page.locator("//input[@name='current_user_only']").check()
  await page.waitForTimeout(3000);
  await page.close();
});
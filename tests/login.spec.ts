import { test, expect } from '@playwright/test';

test('vtiger invalid login', async ({ page }) => {
 
await page.goto('http://localhost:100');
await page.locator("//input[@name='user_name']").fill('admin');
await page.locator("//input[@name='user_password']").fill('admin');
await page.locator("//input[@name='Login']").click;
await expect(page).toHaveTitle(/Vtiger/);

});


test('Valid login', async ({ page }) => {
 
await page.goto('http://localhost:100');
await page.locator("//input[@name='user_name']").fill('admin');
await page.locator("//input[@name='user_password']").fill('admin');
await page.locator("//input[@name='Login']").click();
await expect(page).toHaveTitle(/Vtiger/);
await page.locator("(//a[@href='index.php?module=Leads&action=index'])").nth(0).click();
await page.locator("//a[@href='index.php?module=Leads&action=EditView&return_module=Leads&return_action=DetailView']");                                                                                                                                                                                                                                                           
// .click();

});

test('Fill form', async ({ page }) => {
 
await page.goto('http://localhost:100');
await page.locator("//input[@name='user_name']").fill('admin');
await page.locator("//input[@name='user_password']").fill('admin');
await page.locator("//input[@name='Login']").click();
//await expect(page).toHaveTitle(/Vtiger/);
await page.locator("(//a[@href='index.php?module=Leads&action=index'])[1]").click();
await page.locator("//a[@href='index.php?module=Leads&action=EditView&return_module=Leads&return_action=DetailView']").click();                                                                                                                                                                                                                                                           
await page.locator("//select[@name='salutationtype']").selectOption({label:'Mr.'})
await page.locator("//input[@name='lastname']").fill('tinku');
await page.locator("//input[@name='company']").fill('film');
await page.locator("//input[@name='designation']").fill('actor');
await page.locator("//select[@name='leadsource']").selectOption({label:'Cold Call'})
await page.waitForTimeout(3000);
await page.locator("//input[@name='phone']").fill('9777876668');
await page.locator("//input[@name='mobile']").fill('0998767687877');
await page.locator("//input[@name='email']").fill('test@gmail.com');
await page.locator("//input[@value='T']").check();
await page.waitForTimeout(3000);
await page.locator("//input[@type='submit']").nth(0).click();
await page.locator("//input[@title='Edit [Alt+E]']").click();
await page.waitForTimeout(3000);
await page.locator("//select[@name='rating']").selectOption({label:'Acquired'});
await page.locator("//input[@type='submit']").nth(1).click();
await page.locator("//a[@class='currentTab']").click();
await page.locator("//input[@name='lastname' and @size='10']").fill('tinku');
await page.locator("//input[@title='Search [Alt+Q]']").click();
await page.locator("//input[@type='checkbox']").click();
await page.locator("//input[@value='Delete']").click();


});


test('google', async ({ page }) => {
 
await page.goto('http://google.com');
await page.waitForTimeout(5000);
await page.locator("//textarea[@class='gLFyf']").fill('Automation test hub');
await page.waitForTimeout(5000);
//await page.locator("//input[@name='user_name']").fill('admin');
//await page.locator("//input[@name='user_password']").fill('admin');
await page.locator("//span[@class='lTxWLe']").press('Enter');
await page.locator("//div[@class='recaptcha-checkbox-border']").click();
await page.waitForTimeout(30000);
await page.locator("//span[@id='recaptcha-anchor']").check();
await page.close();

//.press('Enter');


});


test('Amazon', async ({ page }) => {
 
await page.goto('https://www.amazon.in/');
await page.locator("//div[@class='nav-div' and @id='nav-link-accountList']").click();
await page.locator("//input[@name='email']").fill('9805214869');
await page.locator("//input[@type='submit']").click();
//await expect(page).toHaveTitle(/Amazon/);
await page.waitForTimeout(5000);
await page.close();
});


test('New', async ({ page }) => {
 
await page.goto('https://www.amazon.in/');
//await page.locator("button[type='submit']").click();
await page.locator("//div[@class='nav-div' and @id='nav-link-accountList']").click();
await page.locator("//input[@name='email']").fill('7018287926');
await page.locator("input[type='submit']").click();
await page.locator("//input[@type='password']").fill('Eshu@1234#');
//await expect(page).toHaveTitle(/Amazon/);
await page.waitForTimeout(5000);
await page.locator("//a[contains(text(),'Mobiles' )]").click();
await page.locator("//input[@id='apb-browse-refinements-checkbox_1']").check();
await expect(page.getByRole('heading', { name: /Samsung Galaxy M07 Mobile/ })).toBeChecked();

await page.close();
});

test('google search', async ({ page }) => {
 
await page.goto('https://www.google.com');
await page.locator("//div[@class='nav-div' and @id='nav-link-accountList']").click();
await page.locator("//input[@name='email']").fill('9805214869');
await page.locator("input[name='Login']]").click();
//await expect(page).toHaveTitle(/Amazon/);
await page.waitForTimeout(5000);
await page.close();
});









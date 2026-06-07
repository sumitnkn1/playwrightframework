import { test, expect } from '@playwright/test';
import { getTestData } from '../utilities/jsonReader';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';


let homePage: HomePage;
let loginPage: LoginPage;

test('Verify_title_TC001', async ({ page }) => {
  await page.goto('/');
  const testData = await getTestData('./testdata/users.json', 'Verify_title_TC001')
  await expect(page).toHaveTitle(testData.title);
  await page.close();
});

test('Verify_invalid_login_TC_002', async ({ page }) => {
loginPage = new LoginPage(page); 
await page.goto('/');
const testData = await getTestData('./testdata/users.json', 'Verify_invalid_login_TC_002')
await loginPage.login(testData.username,testData.password);
const isErrorMessage = await loginPage.isErrorMessage();
expect(isErrorMessage).toBe(true);
await page.close();
});


test('Verify_Valid_login_TC_003', async ({ page }) => {
 
await page.goto('/');
loginPage = new LoginPage(page);
homePage = new HomePage(page);

const testData = await getTestData('./testdata/users.json','Verify_Valid_login_TC_003');
await loginPage.login(testData.username, testData.password);
const isWelcomeMessage = await homePage.isWelcomeMessage();

expect(isWelcomeMessage).toBe(true);

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








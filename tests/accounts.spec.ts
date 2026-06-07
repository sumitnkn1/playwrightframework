import { test, expect } from '@playwright/test';
import { getTestData } from '../utilities/jsonReader';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { AccountsPage } from '../pages/accountsPage';

let homePage: HomePage;
let loginPage: LoginPage;
let accountPage: AccountsPage;

test('Verify_Window_PopUp_TC001', async ({ page }) => {
  await page.goto('/');
  const testData = await getTestData('./testdata/accounts.json', 'Verify_Window_PopUp_TC001')
  const loginPage = new LoginPage(page);
  const accountPage = new AccountsPage(page);
  const homePage = new HomePage(page);
  await loginPage.login(testData.username,testData.password);
  await homePage.clickNewAccount();
  await accountPage.setMemberOf(testData.accountname);


  //await page.close();
});



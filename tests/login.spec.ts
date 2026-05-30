import { test,expect } from '@playwright/test';
import { getTestData } from '../utilities/jsonReader';

import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { LeadPage } from '../pages/leadPage';

let loginpage: LoginPage;
let homepage: HomePage;
let leadPage: LeadPage;

test('verify_Title_TC01', async ({ page }) =>{
    const data = getTestData('verify_Title_TC01');
    await page.goto("/");
    await expect(page).toHaveTitle(data.title);
    await page.close();
});

test('verify_logo_TC02', async ({ page }) =>{
    await page.goto("/"); 
    loginpage = new LoginPage(page);
    const isLogoDisplayed = await loginpage.isLogoDisplayed();
    await expect(isLogoDisplayed).toBe(true);
    await page.close();
});

test('verify_Invalid_login_TC03', async ({ page }) =>{
    const data = getTestData('verify-invalid_login_TC03')
    await page.goto("/"); 
    loginpage = new LoginPage(page);
    await loginpage.login("admin","admin123");
    const isErrorMsgDisplayed = await loginpage.isErrorMsgDisplayed();
    await expect(isErrorMsgDisplayed).toBe(true);
    await page.close();
});

test('verify_valid_login_TC04', async ({ page }) =>{
    const data = getTestData('verify_valid_login_TC04');
     await page.goto("/"); 
    loginpage = new LoginPage(page);
    await loginpage.login("admin","admin");
    await page.waitForTimeout(3000);
    homepage = new HomePage(page);
    homepage.clickLogout();
    await page.waitForTimeout(3000);
    const isLogoDisplayed = await loginpage.isLogoDisplayed();
    await expect(isLogoDisplayed).toBe(true);
    await page.close();
});

test('verify_create_lead_with_mandatory_fields_TC05', async ({ page }) =>{
    const data = getTestData('verify_create_lead_with_mandatory_fields_TC05');
     await page.goto("/"); 
    loginpage = new LoginPage(page);
    await loginpage.login("admin","admin");
    homepage = new HomePage(page);
    homepage.clickNewLead();
    await page.waitForTimeout(3000);
    const leadpage = new LeadPage(page);
    await leadpage.createlead("Smith", "Google");
    await page.waitForTimeout(3000);
    const lastname = await leadpage.getLastName();
    await expect(lastname).toBe("Smith");
    const company = await leadpage.getCompany();
    await expect(company).toBe("Google");
    await page.waitForTimeout(2000);
    homepage.clickLogout();
    await page.waitForTimeout(3000);
    await page.close();
});
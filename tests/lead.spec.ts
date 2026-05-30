import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { LeadPage } from "../pages/leadPage";



let loginPage: LoginPage;
let homePage: HomePage;

test('Create_New_Lead_with_Mandatory_Fields_TC_001', async({page})=>{
    loginPage = new LoginPage(page);
    const leadPage = new LeadPage(page);
    homePage = new HomePage(page);
    await page.goto('/');
    await loginPage.login("admin","admin");
    await homePage.clickNewLead();
    await leadPage.saveLead("Vishwanth", "Axis");
    const isLastNameDisplayed = await leadPage.isLastNameDisplayed();
    expect(isLastNameDisplayed).toBe(true);
    const isCompanyDisplayed = await leadPage.isCompanyDisplayed();
    expect(isCompanyDisplayed).toBe(true);
})

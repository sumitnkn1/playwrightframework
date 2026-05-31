import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { LeadPage } from "../pages/leadPage";
import { getTestData } from "../utilities/jsonReader";



let loginPage: LoginPage;
let homePage: HomePage;
let leadPage: LeadPage;

test('Create_New_Lead_with_Mandatory_Fields_TC_001', async({page})=>{
    loginPage = new LoginPage(page);
    const leadPage = new LeadPage(page);
    const homePage = new HomePage(page);
    await page.goto('/');
    const testData = await getTestData('./testdata/leads.json','Create_New_Lead_with_Mandatory_Fields_TC_001')
    await loginPage.login(testData.username,testData.password);
    await homePage.clickNewLead();
    await leadPage.saveLead(testData.lastname, testData.company);
    const isLastNameDisplayed = await leadPage.isLastNameDisplayed();
    expect(isLastNameDisplayed).toBe(true);
    const isCompanyDisplayed = await leadPage.isCompanyDisplayed();
    expect(isCompanyDisplayed).toBe(true);
})

test('Verify_Search_Existing_Lead_by_Lastname_TC002', async ({ page }) => {

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    await page.goto('/');
    const testData = await getTestData('./testdata/leads.json', 'Verify_Search_Existing_Lead_by_Lastname_TC002')
    await loginPage.login(testData.username, testData.password);
    await homePage.clickLeads();
    await leadPage.searchLeadLastName(testData.lastname)
    await leadPage.clickSearch();
    const name = await leadPage.isLastNameDisplayed()
    expect(name).toBe(true);
    await page.close();
})
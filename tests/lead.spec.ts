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

test('Handle_Dialogue_Message_Creating_New_Lead_TC_003', async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    const testData = await getTestData("./testdata/leads.json", "Handle_Dialogue_Message_Creating_New_Lead_TC_003");
    await loginPage.login(testData.username, testData.password);
    await homePage.clickNewLead();
    const alertPromise = leadPage.handleVerifyDialogue()
    await leadPage.clickSave();
    const alertText = await alertPromise;
    expect(alertText).toBe("Last Name cannot be empty");
    await leadPage.setLastName(testData.lastname);
    const alertPromise2 = leadPage.handleVerifyDialogue();
    await leadPage.clickSave();
    const alertText2 = await alertPromise2;
    expect(alertText2).toBe("Company cannot be empty");
    await leadPage.clickSave();
    await leadPage.setCompany(testData.company);
    await leadPage.clickSave();
    await page.close();
});

test('Handle_Delete_Confirm_Message_Existing_Lead_TC_004', async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    leadPage = new LeadPage(page);
    const testData = await getTestData("./testdata/leads.json", "Handle_Delete_Confirm_Message_Existing_Lead_TC_004");
    await loginPage.login(testData.username, testData.password);
    await homePage.clickLeads();
    await leadPage.findLastName(testData.lastname);
    await leadPage.clickSearch();
    const alertPromise = leadPage.handleDismissConfirm();
    await leadPage.clickDelete();
    const alertText = await alertPromise;
    expect(alertText).toBe("Are you sure?");

    const alertPromise2 = leadPage.handleAcceptConfirm();
    await leadPage.clickDelete();
    const alertText2 = await alertPromise2;
    expect(alertText2).toBe("Are you sure?");

    await page.close();
});
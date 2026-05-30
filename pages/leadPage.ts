import { Page } from "@playwright/test";

export class LeadPage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    //Locators:
    loc_textbox_first_name = '//input[@name="firstname"]';
    loc_textbox_last_name = '//input[@name="lastname"]';
    loc_textbox_company_name = '//input[@name="company"]';
    loc_btn_save = '//input[@name="button"]';
    loc_txt_lastName = '//td[contains(text(),"Last Name")]/following::td[1]';
    loc_txt_company = '//td[text()="Company:"]/following::td[1]';

    async setFirstname(firstname: string) {
        await this.page.fill(this.loc_textbox_first_name, firstname);
    }

    async setLastName(lastname: string) {
        await this.page.fill(this.loc_textbox_last_name, lastname);
    }

    async setCompany(company: string) {
        await this.page.fill(this.loc_textbox_company_name, company);
    }

    async clickSave() {
        await this.page.locator(this.loc_btn_save).nth(0).click();
    }

    async saveLead(lastname: string, company: string) {
        await this.setLastName(lastname);
        await this.setCompany(company);
        await this.clickSave();
    }

    async isLastNameDisplayed():Promise<boolean|null>
    {
        const result = this.page.locator(this.loc_txt_lastName);
        await result.waitFor({ state: 'visible' });
        return this.page.isVisible(this.loc_txt_lastName);
    }

    async isCompanyDisplayed():Promise<boolean|null>
    {
        const result = this.page.locator(this.loc_txt_company);
        await result.waitFor({ state: 'visible' });
        return this.page.isVisible(this.loc_txt_company);
    }
}
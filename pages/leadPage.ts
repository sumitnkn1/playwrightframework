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
    loc_btn_search = '//input[@title="Search [Alt+Q]"]';
    loc_lnk_delete = '//tr[@class="oddListRow"]/td/a[text()="del"]';

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

    async isLastNameDisplayed(): Promise<boolean | null> {
        const result = this.page.locator(this.loc_txt_lastName);
        await result.waitFor({ state: 'visible' });
        return this.page.isVisible(this.loc_txt_lastName);
    }

    async isCompanyDisplayed(): Promise<boolean | null> {
        const result = this.page.locator(this.loc_txt_company);
        await result.waitFor({ state: 'visible' });
        return this.page.isVisible(this.loc_txt_company);
    }

    async searchLeadLastName(lastname: string) {
        await this.page.locator(this.loc_textbox_last_name).nth(1).fill(lastname);
    }

    async clickSearch() {
        await this.page.click(this.loc_btn_search);
    }

    async findLastName(lastname: string) {
        await this.page.locator(this.loc_textbox_last_name).nth(1).fill(lastname)
    }

    async clickDelete() {
        await this.page.locator(this.loc_lnk_delete).nth(0).click();
    }

    async handleVerifyDialogue(): Promise<string> {

        return new Promise((resolve) => {
            this.page.once('dialog', async dialog => {
                console.log(dialog.message());
                const message = dialog.message();
                await dialog.accept();
                resolve(message);
            });
        })
    }

    async handleDismissConfirm(): Promise<string> {

        return new Promise((resolve) => {
            this.page.once('dialog', async dialog => {
                console.log(dialog.message());
                const message = dialog.message();
                await dialog.dismiss();
                resolve(message);
            });
        })
    }

    async handleAcceptConfirm(): Promise<string> {

        return new Promise((resolve) => {
            this.page.once('dialog', async dialog => {
                console.log(dialog.message());
                const message = dialog.message();
                await dialog.accept();
                resolve(message);
            });
        })
    }

    async selectCheckBoxFromLeadTable(lastname: string) {
        let found = false;
        for (let i: number = 5; i < 25; i++) {
            const cellText = await this.page.locator(`//table[@class="FormBorder"]/tbody/tr[${i}]/td[4]`).textContent();
            //console.log(`Row ${i}: ${cellText ?? 'N/A'}`);
            if (cellText?.trim() === lastname) {
                found  =true;
                await this.page.locator(`//table[@class="FormBorder"]/tbody/tr[${i}]//input[@name="selected_id"]`).check();
                await this.page.locator(`//table[@class="FormBorder"]/tbody/tr[${i}]/td/a[text()="edit"]`).click();
                break;
            }

        }
        if(!found)
        {
            throw new Error(`Record "${lastname}" not found in lead table`);
        }
    }

    async getLeadName(lastname:string)
    {
        return await this.page.locator(`//td[contains(text(),"${lastname}")]`).textContent()
    }

    
}
import { Page } from "@playwright/test";


export class AccountsPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    //Locators:
    loc_btn_change = '//input[@name="btn1"]';
    loc_text_accountname = '//input[@name="name"]';
    loc_btn_search = '//input[@name="button"]';
    loc_lnk_account = '//a[text()="vtiger"]';

    async setMemberOf(accountname: string): Promise<void> {

        const [newWindow] = await Promise.all([
        this.page.context().waitForEvent('page'),
        await this.page.click(this.loc_btn_change)
        ]);
        await newWindow.waitForLoadState();
        await newWindow.locator(this.loc_text_accountname).fill(accountname);
        await newWindow.locator(this.loc_btn_search).click();
        await newWindow.locator(this.loc_lnk_account).click();
    }

}



import { expect, Page } from "@playwright/test";


export class LoginPage{
    page: Page;

    constructor(page:Page)
    {
        this.page = page;
    }

    //Locators:
    loc_txtbox_username = '//input[@name="user_name"]';
    loc_txtbox_password = '//input[@name="user_password"]';
    loc_btn_login = '//input[@name="Login"]';
    loc_img_logo = '//img[@src="include/images/vtiger-crm.gif"]'
    loc_txt_error_msg = '//td[contains(text(),"You must specify a valid username and password.")]';

    async login (userid: string, password:string)
    {
        await this.setUsername(userid);
        await this.setPassword(password);
        await this.clickLogin();
    }

    async setUsername(userid:string)
    {
        await this.page.fill(this.loc_txtbox_username,userid);
    }

    async setPassword(password:string)
    {
        await this.page.fill(this.loc_txtbox_password,password);
    }

    async clickLogin()
    {
        await this.page.click(this.loc_btn_login);
    }

    async isLogoDisplayed():Promise<boolean|null>
    {
        return this.page.isVisible(this.loc_img_logo);
    }
    
    async isErrorMessage():Promise<boolean|null>
    {
        return this.page.isVisible(this.loc_txt_error_msg);
    }

    async passwordFieldType():Promise<string|null>
    {
        return await this.page.locator(this.loc_txtbox_password).getAttribute("type");
    }
}
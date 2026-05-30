import {Page} from '@playwright/test';


export class LoginPage
{
    page: Page;

    constructor (page:Page)
    {
        this.page = page;
    }

    //Locators:
    loc_txtbox_username = '//input[@name="user_name"]';
    loc_txtbox_password = '//input[@name="user_password"]';
    loc_btn_login = '//input[@name="Login"]';
    loc_img_logo = '//img[@src="include/images/vtiger-crm.gif"]'
    loc_txt_error_msg = '//td[contains(text(),"You must specify a valid username and password.")]';

    async login(username:string, password:string)
    {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickLoginButton();
    }

    async setUsername(username:string)
    {
        await this.page.fill(this.loc_txtbox_username,username);
    }

    async setPassword(password:string)
    {
        await this.page.fill(this.loc_txtbox_password,password);
    }

    async clickLoginButton()
    {
        await this.page.click(this.loc_btn_login);
    }

    async isErrorMessageDisplayed():Promise<boolean|null>
    {
        return this.page.locator(this.loc_txt_error_msg).isVisible();
    }
}


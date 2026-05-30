import { Page } from "@playwright/test";

export class HomePage{
    page:Page;

    constructor(page:Page)
    {
        this.page=page
    }
    
    //Locators:
    loc_logout_lnk = '//a[text()="Logout"]';
    loc_welcome_msg = '//strong[contains(normalize-space(),"Welcome admin")]';
    loc_newlead_lnk = '//a[text()="New Lead"]';
    loc_leads_lnk = '//a[text()="Leads"]';

    async clickNewLead()
    {
        await this.page.click(this.loc_newlead_lnk);

    }

    

}
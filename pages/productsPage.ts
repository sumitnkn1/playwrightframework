import { Page } from "@playwright/test";
import path from "node:path";

export class ProductsPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators:
    loc_choosefile_button = '//input[@name="imagename"]';
    loc_filename = '//input[@name="filename"]';

    async uploadFile(filepath: string) {
        await this.page.locator(this.loc_choosefile_button).setInputFiles(path.join(filepath));
    }

    async isFileUploadSuccess(): Promise<string | null> {
        const fileName = await this.page.locator('input[name="imagename"]').evaluate(
            (el: HTMLInputElement) => el.files?.[0]?.name ?? null
        );
        return fileName;
    }

    async uploadFileUsingChooseOption(filepath: string) {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.locator(this.loc_choosefile_button).click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filepath);
    }
}
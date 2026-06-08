import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { ProductsPage } from "../pages/productsPage";
import path from "node:path";

let loginPage: LoginPage;
let homePage: HomePage;
let productsPage: ProductsPage;

test('Verify_file_upload_TC_001', async({page})=>{
    await page.goto('/');
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    await loginPage.login("admin","admin");
    await homePage.clickNewProduct();
    
    await productsPage.uploadFile('./testdata/myfile.png');
    const result = await productsPage.isFileUploadSuccess();
    expect(result).toBe('myfile.png');

})
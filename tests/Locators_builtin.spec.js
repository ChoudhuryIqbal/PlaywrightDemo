const {test, expect} =require ('@playwright/test')
const { log } = require('console')

test ('Built-in locators', async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const logo= await page.getByAltText("company-branding")
    await expect (logo).toBeVisible();
    //page.getByPlaceHolder ()-- to locate an input by placeholder
    await page.getByPlac
})
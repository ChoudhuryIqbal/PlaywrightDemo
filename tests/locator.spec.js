//const {test.expect}= require ('@playwright/test')
import {test,expect } from '@playwright/test'

test ('Locators',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

    await page.click('id=login2')

    //await page.locator ("#loginusername").fill("pavanol")
    await page.fill("#loginusername",'pavanol')

    // provide password
    await page.fill ("input[id='loginpassword']",'test@123')

    //click on login button
    await page.click ("//button[normalize-space()='Log in']")

    //verify logout link presence
    const logoutlink=await page.locator ("//a[normalize-space()='Log out']")
    await expect (logoutlink).toBeVisible();
    await page.close();

})
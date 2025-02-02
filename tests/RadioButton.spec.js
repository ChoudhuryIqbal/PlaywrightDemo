const {test,expect} =require ('@playwright/test')

test("This is test", async ({page})=>{
    await page.locator("//input[@value='option2']").check();
    await expect (await page.locator("thisislocator").isChecked()).toBeFalsy();
    
    await page.waitForTimeout(3000)
})
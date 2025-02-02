const {test,expect}=require ('@playwright/test')

test ("Handle Dropdown", async ({page})=>{
    await page.goto ("http://testautomation.com")
    await page.selectOption ('#colors',['blure','red','yellow'])
    const options=await page.locoator ('#color option')
    await expect (options).toHaveCount();
    await page.waitForTimeout(5000)
    const option=await page.$$ ('#color option')
    await expect (option).toHaveCount();
})
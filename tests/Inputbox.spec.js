const {test,expect}=require ('@playwright/test')
test('handle inputbox',async ({page})=>{
    await page.goto("Demo Url")
    page.locator("").fill("")
    page.fill("locator","item to send")
    await page.waitForTimeout(555)
})
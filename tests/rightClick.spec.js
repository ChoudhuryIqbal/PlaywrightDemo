const { test, expect } = require('@playwright/test')


test("Right Click ", async ({ page }) => {


    page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    const button=await page.locator (".context-menu-one.btn")
    //right click Action
    await button.click({button:'right'});
    await page.waitForTimeout(5000)

})
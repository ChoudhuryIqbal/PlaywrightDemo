const { test, expect } = require('@playwright/test')


test("Double Click ", async ({ page }) => {
    page.goto("https://testautomationpractice.blogspot.com/")
    const button=await page.locator ("//button[text()='Copy Text']")
    //right click Action
    await button.dblclick()
    const fieldText=await page.locator("input[id='field2']")
    expect (fieldText).toHaveValue("Hello World!")
    await page.waitForTimeout(5000)
})
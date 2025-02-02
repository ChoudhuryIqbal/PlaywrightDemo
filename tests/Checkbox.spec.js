const { test, expect } = require("@playwright/test")
test ("Handle Checkbox", async ({page})=>{
    await page.goto("website url")
    await page.locator("locator").check()
    await page.check("locator")
    expect(await page.locator("lcoateo")).toBeChecked()
    expect(await page.locator('sfaf').isChecked()).toBeTruthy()

    //multiple checkbox

    const checkboxLocators = [
        "Checkbox one ",
        "Checkbox Two ",
        "Checkbox Three"
    ]

    for (const locator of checkboxLocators) {

        if (await page.locator(lcoator)).isChecked()
        {

            await page.locator(locator).check()
        }
    }

    await page.waitForTimeout(500)



})
const { test, expect } = require('@playwright/test')


test("Handling Dropdowns", async ({ page }) => {


    page.goto("http:google.com")

    await page.locator("Dropdown locator ").selectOption({ label: "India" })
    await page.locator("dropdown locator ").selectOption('India')//visible Text
    await page.locator('dropdown locator').selectOption({ value: 'uk' })
    await page.locator('dropdown').selectOption({ index: 1 })
    //multiple elements
    const options = await page.locator('#country option')

    await expect(options).toHaveCount(10)
    //2, Check number of options in dropdown approach 2
    const options2 = await page.$$('#country option')
    console.log("Number of options: ", options2.length)


    //check presence of value in the dropdown 
    const content = await page.locator("Country").textContent()

    await expect(content.includes("India")).toBeTruthy();
    // Check Presence of value in the dropdown
    const optionspvalue = await page.$$("country option")

    let status = false;
    for (const optionso of optionspvalue) {
        console.log(await optionso.textContent())
    }



})
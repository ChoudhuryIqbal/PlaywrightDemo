const { test, expect } = require('@playwright/test')
const { it } = require('node:test')


test("Double Click ", async ({ page }) => {
    page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
   
    const rome=await page.locator ('#box6')
    const italy=await page.locator ('#box106')

    //Approach 2
    await rome.hover()
    await page.mouse.down()
    await italy.hover()
    await page.mouse.up()
    await page.waitForTimeout(5000)
    //approach 2 
    //await rome.dragTo(italy)
})
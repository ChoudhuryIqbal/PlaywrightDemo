const {test,expect} = require('@playwright/test')

test("Date Picker Automation ", async ({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/")
    //await page.fill("#datepicker","03/14/2025")

    const year="2025"
    const month="September"
    const date="20"

    await page.waitForTimeout(3000)
    await page.click("#datepicker")
    while (true){
        const currentYear=await page.locator(".ui-datepicker-year").textContent()
        const currentMonth=await page.locator(".ui-datepicker-month").textContent()

        if (currentMonth==month && currentYear==year){
            break;

        }
        await page.locator ('[title="Next"]').click()

    }

   const dates= await page.$$("//a[@class='ui-state-default']");
    for (const dt of dates){
        if (await dt.textContent()==date){
            await dt.click();
            break;
        }
    }
await page.waitForTimeout(5000);
})
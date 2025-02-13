const {test,expect}=require ('@playwright/test')

test ("Handle Dropdown", async ({page})=>{
    await page.goto("https://www.redbus.in")
    await page.locator ('src').fill('delhi');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbi')]/div/text[1]")

const fromCityOptions=await page.$$("li[contains(@class,'sc-iwsKbi')]/div/text[1]")
    for (let option of fromCityOptions){
    const value=await option.textContent()
    console.log (value);
    if (value.includes('Anand Vihar')){
        await option.click()
        break;
    }
    }

    await page.waitForTimeout(3000)
})



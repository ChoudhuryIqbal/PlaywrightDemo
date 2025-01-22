// @ts-check
const {test,expect}=require ('@playwright/test')
test("Home Page", async ({page})=>{
    await page.goto ('https://www.demoblaze.com/index.html');
    const pageTitle=await page.title();
    console.log( "Page Title is ", pageTitle);
    const pageUrl=page.url()
    console.log("Page URL is ", pageUrl)
    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
    
    await page.close();

})
const {test,expect}=require ('@playwright/test')


test ('Assertions Test Playwright', async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/")
    await expect(page).toHaveURL("https://demo.nopcommerce.com/")
    await expect (page).toHaveTitle("nopCommerce demo store")
    const logoElement= await page.locator(".header-logo")
    await expect (logoElement).toBeVisible();
    const searchStoreBox=await page.locator ("#small-searchterms")
    await expect (searchStoreBox).toBeEnabled();
    const regButton=await page.locator(".ico-register")
    regButton.click();
  
    const maleRadioBtn= await page.locator("#gender-male")
    maleRadioBtn.check()
   
   
    await expect (maleRadioBtn).toBeChecked()

    const registerButton=await page.locator("#register-button")
    await expect (registerButton).toHaveAttribute('type','submit')
    const newsLetterChkBox= await page.locator("#Newsletter")
    await expect (newsLetterChkBox).toBeChecked()

   await expect(await page.locator ('.page-title h1')).toHaveText("Register")


   const emailInput=await page.locator ("#Email")
   emailInput.fill("test@demo.com")
   await expect(emailInput).toHaveValue("test@demo.com")


   const options=await page.locator('select[name="DateOfBirthMonth"] option')
   await expect (options).toHaveCount(13)
    


})
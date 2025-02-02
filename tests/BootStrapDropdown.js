const {test,expect}=require ('@playwright/test')

test ("Handle Dropdown", async ({page})=>{
    await page.goto("http://google.com")
    await page.locator("element of dropdown").click()

    //1
    const options=await page.locator ('ul> li label input')
    await expect(options).toHaveCount(11);
    for (let optoin of options)
       let value= await optoin.textContent();
       console.log(value)
       if (value.includes('Angular')|| value.includes("java"))
    {
        await optoin.click()
    }

     
    

    })



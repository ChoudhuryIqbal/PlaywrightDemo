const {test,expect} =require ('@playwright/test')

test ("Inner Frames",async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    //Frame Object Framew Locator
   const frame3= await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_3.html'})
  // frame3.locator ("input[name='mytext']").fill('welcome')
   //nested frame
   const childFrames= await frame3.childFrames()
   childFrames[0].locator('//*[@id="i6"]/div[3]/div').check();


   await page.waitForTimeout(5000)

})
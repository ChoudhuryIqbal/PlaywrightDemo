const { test, expect } = require("@playwright/test");

test.skip("Alert Hanlding", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //Enabling Dialog window Handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("#alertBtn");
  await page.waitForTimeout(5000);

  //confirm window
});

test.skip("Confirmation Dialog Alert ok and Cancel ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept();
  });

  await page.click("button#confirmBtn");
  await expect(page.locator("#demo")).toHaveText("You pressed OK!");
  await page.waitForTimeout(5000);
});
//Prompt Dialog
test("Prompt Dialog ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    
    expect (dialog.message()).toContain("Please enter your name:")
    expect (dialog.defaultValue()).toContain("Harry Potter")
    await dialog.accept("John")
  });

  await page.click("#promptBtn");
  await expect(page.locator("#demo")).toHaveText("Hello John! How are you today?");
  await page.waitForTimeout(5000);
});

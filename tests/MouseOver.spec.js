const { test, expect } = require("@playwright/test");
test("Mouse Over", async ({ page }) => {
  await page.goto("https://demo-opencart.com/");
  const desktop = await page.locator("");
  const macbook = await page.locator("");
  await desktop.hover();
  await macbook.hover();
});

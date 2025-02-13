const { test, expect } = require("@playwright/test");

test("Handling Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("#productTable");

  const coloumns = await table.locator("thead tr th");
  console.log("Number of columns: ", await coloumns.count());
  const rows = await table.locator("tbody tr");
  console.log("Numbers of Row: ", await rows.count());
  expect(await coloumns.count()).toBe(4);
  expect(await rows.count()).toBe(5);
  // await selectProduct(rows,page,'Smartwatch')
  // await selectProduct(rows,page,'Laptop')
  /*for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const tds = row.locator("td");

    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }*/

  const pages = await page.locator(".pagination li a");
  console.log("Number of pages in the table : ", await pages.count());

  for (let p = 1; p < (await pages.count()); p++) {
    await pages.nth(p).click();
    for (let i = 0; i < (await rows.count()); i++) {
        const row = rows.nth(i);
        const tds = row.locator("td");
    
        for (let j = 0; j < (await tds.count()) - 1; j++) {
          console.log(await tds.nth(j).textContent());
        }
      }
    
  }
  await page.waitForTimeout(5000);
});

async function selectProduct(rows, page, name) {
  const machedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });
  await machedRow.locator("[type='checkbox']").check();
}

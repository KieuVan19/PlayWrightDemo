import { test, expect } from '@playwright/test';
test("auto complete", async function ({ page }) {
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@name='q']").fill("playwright");
    await page.waitForSelector("//li[@role='presentation']");
    const elements = await page.$$("//li[@role='presentation']");

    for (let i = 0; i < elements.length; i++) {
        const text = await elements[i].textContent();
        if (text.includes("browsers")) {
            await elements[i].click();
            break;
        }
    }
    // await page.waitForTimeout(5000);

    expect(page.url()).toContain("search?q=playwright+browsers");

})
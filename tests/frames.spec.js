import { test, expect } from '@playwright/test';

test("Handle frames", async function ({ page }) {
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    const packageFrame = await page.frameLocator("frame[title='All Packages']");
    const option = "a:text('java.applet')";
    await packageFrame.locator(option).click();
    const allClassesFrame = await page.frameLocator("frame[title='All classes and interfaces (except non-static nested types)']");
    const optionClass = await allClassesFrame.locator("h1 a").textContent()
    expect(optionClass).toBe("java.applet");

})
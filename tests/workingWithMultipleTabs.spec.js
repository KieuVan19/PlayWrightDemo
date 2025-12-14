import { test, expect } from '@playwright/test';

// First create a browser (Chrome, Firefox...).
// Then create a context, which is a browser profile on that browser.
// This context holds all the session, cookies, auth state...
// Then create a page, which is a new tab inside that context.
// Multiple pages will share the same context.

test("Woking with new tabs", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//div[@class='social']/div[@class='social-btns']/a[contains(@href, 'youtube')]").click() 
    ]);
    await newPage.getByPlaceholder("Search").fill("Playwright Automation Tutorial for Beginners from Scratch");
    await newPage.locator("//button[@title='Search']").click();
    await page.bringToFront();
    expect(await page.title()).toBe("Learn Automation Courses")

})

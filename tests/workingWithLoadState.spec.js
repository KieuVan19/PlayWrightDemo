import { test, expect } from '@playwright/test';

test("Load state", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator("//div/a[contains(@href, 'signup')]").click();
    await page.waitForLoadState(networkidle);

    const interestCount = await page.locator("//label[@class='interest']").count();
    expect (interestCount).toBe(7);

})
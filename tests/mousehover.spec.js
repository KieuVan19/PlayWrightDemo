import { test, expect } from '@playwright/test';

test("Mouse Hover", async function ({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").fill("admin@email.com");
    await page.getByPlaceholder("Enter Password").fill("admin@123");
    await page.locator(".submit-btn").click();
    await page.locator("//div[@class='nav-menu-item-manage']").hover({force:true});
    await page.getByAltText("manage course").click();

    const expectedUrl = "https://freelance-learn-automation.vercel.app/course/manage";
    const actualUrl = page.url();
    console.log(actualUrl);
    expect(actualUrl).toBe(expectedUrl);
})
import { test, expect } from '@playwright/test';

test("Valid login", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type ='submit']").click();
    await page.waitForTimeout(5000);
    expect(page.url()).toContain("dashboard");
})


test("Invalid login", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type ='submit']").click();
    await page.waitForTimeout(3000);

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
    expect(errorMessage).toBe("Invalid credentials");
})
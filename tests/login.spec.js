import { test, expect } from '@playwright/test';

// test("Valid login", async function ({ page }) {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.getByPlaceholder("Username").fill("Admin");
//     await page.getByPlaceholder("Password").fill("admin123");
//     await page.locator("//button[@type ='submit']").click();
//     await page.waitForTimeout(5000);
//     expect(page.url()).toContain("dashboard");
// })


test("Invalid login", async function ({ page }) {
    await test.step("Go to login page", async () => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })
    await test.step("Fill in username", async () => {
        await page.getByPlaceholder("Username").fill("Admin");
    })
    await test.step("Fill in password", async () => {
        await page.getByPlaceholder("Password").fill("admin123");
    })
    await test.step("Click submit button", async () => {
        await page.locator("//button[@type ='submit']").click();
        await page.waitForTimeout(3000);
    })
    await test.step("Verify that the invalid message is displayed", async () => {
        const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
        expect(errorMessage).toBe("Invalid credentials");
    })
})
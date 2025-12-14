import { test, expect } from '@playwright/test';


test("Select Value From Dropdown", async function ({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    const dropdown = page.locator("#hobbies");
    dropdown.selectOption(["Playing", "Reading"]);
    await page.waitForTimeout(5000);
 
})
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import HomePage from '../pages/homePage.js';


test("Login to application using POM", async function ({ page }) {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.loginToApplication("admin@email.com","admin@123");
    await expect(homePage.manageMenuICN).toBeVisible();
 

})
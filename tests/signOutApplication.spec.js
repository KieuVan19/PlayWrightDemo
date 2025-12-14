import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import HomePage from '../pages/homePage.js';

test("Sign out of application", async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await loginPage.loginToApplication();
    await page.waitForLoadState("networkidle");
    await homePage.signOut();
    await page.waitForLoadState("networkidle");
    expect(page.url()).toContain("login");
})


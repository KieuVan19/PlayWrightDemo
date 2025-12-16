import { test, expect } from '@playwright/test';
import { log } from 'node:console';
// const { test, expect } = require('@playwright/test');

test('My First Test', { tag: '@smoke' }, async function ({ page }) {
    expect(true).toBeTruthy;

})
test('My Second Test @negativeCases', async function ({ page }) {
    expect(12).toBe(13);

})
test.skip('My Thrid Test', async function ({ page }) {
    expect("Heather").toContain("Heather")
})
test('My Fourth Test', async function ({ page }) {
    expect(12).toBe(13).toBeFalsy();

})
test("Valid login", {
    annotation: {
        type: 'Epic: Authentication',
        description: 'User is able to login'
    }
}, async function ({ page }) {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("//button[@type ='submit']").click();
    await page.waitForTimeout(5000);
    expect(page.url()).toContain("dashboard");
})
test.describe('Navigation', ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('https://playwright.dev/');
    })
    test('Main navigation', async ({page})=>{
        expect(page.url()).toBe('https://playwright.dev/');

    })
    test('Navigate to Introduction', async ({page})=>{
        const getStarted_BTN = await page.getByRole('link',{name:'Get started'});
        await getStarted_BTN.click();
        expect(page.url()).toContain("/docs/intro")
        
    })
})


test.afterEach(async ({page})=>{
    console.log(`Finish ${test.info().title} with status: ${test.info().status}`);
})
import { test, expect } from '@playwright/test';
// const testData = JSON.parse(JSON.stringify(require('./testData.json')))
// This create a copy of the test DataTransfer, avoiding modifying directly into the test data
import testData from './testData.json' assert { type: 'json' };

test("read data from JSON file", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").fill(testData.username);
    await page.getByPlaceholder("Enter Password").fill(testData.password);
    await page.locator("//button[text() = 'Sign in']").click();
})


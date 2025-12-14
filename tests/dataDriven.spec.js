import { test, expect } from '@playwright/test';
import  testData  from './loginData.json';

test.describe("Data driven login test", () => {
    for (const data of testData) {
        test.describe(`login with Id: ${data.id}`, () => {
            test("login to application", async ({ page }) => {
                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.getByPlaceholder("Enter Email").fill(data.username);
                await page.getByPlaceholder("Enter Password").fill(data.password);
            })
        })
    }
})


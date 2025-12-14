import { test, expect } from '@playwright/test';
// const { test, expect } = require('@playwright/test');

test('My First Test', async function ({ page }) {
    expect(true).toBeTruthy;

})
test('My Second Test', async function ({ page }) {
    expect(12).toBe(13);

})
test.skip('My Thrid Test', async function ({ page }) {
    expect("Heather").toContain("Ha")
}) 
test('My Fourth Test', async function ({ page }) {
    expect(12).toBe(13).toBeTruthy;

})
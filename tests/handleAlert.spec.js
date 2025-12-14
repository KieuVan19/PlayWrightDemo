import { test, expect } from '@playwright/test';

test("Handle Alert", async function ({ page }) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async (d) => {
        expect(d.type()).toContain("alert");
        expect(d.message()).toContain("I am a JS Alert");
        await d.accept();
        const resultMessage = await page.locator("//p[@id='result']").textContent();
        expect(resultMessage).toBe("You successfully clicked an alert");
    })

    await page.locator("//button[text()='Click for JS Alert']").click();
})

test("Handle Confirm Box", async function ({ page }) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async (d) => {
        expect(d.type()).toContain("confirm");
        expect(d.message()).toContain("I am a JS Confirm");
        await d.dismiss();
        const resultMessage = await page.locator("//p[@id='result']").textContent();
        expect(resultMessage).toBe("You clicked: Ok");
    })
    await page.locator("//button[text()='Click for JS Confirm']").click();

})

test("Handle Promt Box", async function ({ page }) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    const inputText = "This is a test";
    page.on('dialog', async (d) => {
        expect(d.type()).toContain("prompt");
        expect(d.accept(inputText));
        const resultMessage = await page.locator("//p[@id='result']").textContent();
        expect(resultMessage).toContain(`You entered: ${inputText}`);

    })
    await page.locator("//button[text()='Click for JS Prompt']").click();
})



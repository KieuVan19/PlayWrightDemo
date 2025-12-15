import { test, expect } from '@playwright/test'

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

test("getByRole", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    const female_BTN = await page.getByRole('link', { name: 'Already a user? Login' })
    await female_BTN.click();
    await page.screenshot({ path: './test-results/getByRole.png' })
})

test("getByRole1", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    const aws_CheckBox = await page.getByRole('checkbox', { name: 'AWS' })
    await aws_CheckBox.click();
    await page.screenshot({ path: './test-results/getByRole1.png' })
})
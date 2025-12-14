import { test, expect } from '@playwright/test';

test("File Upload", async function ({ page }) {
    const uploadUrl = "https://the-internet.herokuapp.com/upload";
    const filePath = "C:\\Users\\Van.Ha.Kieu\\Downloads\\google_headquarter.jpg";
    const chooseFile_Btn = page.locator("#file-upload");
    const upload_Btn = page.locator("#file-submit");

    const expectedResultMessage = "File Uploaded!";

    const expectedFileName = filePath.replace("C:\\Users\\Van.Ha.Kieu\\Downloads\\", "");

    //Upload file
    await page.goto(uploadUrl);
    await chooseFile_Btn.setInputFiles(filePath);
    await upload_Btn.click();

    const actualResultMessage = await page.locator("//div[@class='example']/h3").textContent();
    const actualFileName = await page.locator("#uploaded-files").textContent();

    console.log(actualFileName);
    console.log(actualResultMessage);
    
    // Assertions
    expect(actualResultMessage.trim()).toBe(expectedResultMessage);
    expect(actualFileName.trim()).toBe(expectedFileName);
})
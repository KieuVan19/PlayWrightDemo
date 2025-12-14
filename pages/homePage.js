import { expect } from '@playwright/test';

class HomePage {
    constructor(page) {
        this.page = page;
        this.manageMenuICN = page.locator(".nav-menu-item-manage");
        this.burgurMenuICN = page.locator("//img[@alt='menu']");
        this.signOutBTN = page.locator("//button[text()='Sign out']")
    }

    async signOut() {
        await this.burgurMenuICN.click();
        await this.signOutBTN.click();
    }
}
export default HomePage;
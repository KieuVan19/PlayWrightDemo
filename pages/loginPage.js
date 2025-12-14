class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("#email1");
        this.password = page.locator("#password1");
        this.loginBTN = page.locator(".submit-btn");
    }
    async loginToApplication(username,password ) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBTN.click()
    }
}
export default LoginPage;
// export default LoginPage;
//    await this.username.fill("admin@email.com");
//         await this.password.fill("admin@123");

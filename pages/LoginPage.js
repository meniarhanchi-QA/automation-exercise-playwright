const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.loginEmailInput = page.locator('[data-qa="login-email"]');
        this.loginPasswordInput = page.locator('[data-qa="login-password"]');
        this.loginBtn = page.locator('[data-qa="login-button"]');

        
        this.signupNameInput = page.locator('[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('[data-qa="signup-email"]');
        this.signupBtn = page.locator('[data-qa="signup-button"]');
    }

    async login(email, password) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginBtn.click();
    }

    async startSignup(name, email) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupBtn.click(); 
    }
}

module.exports = { LoginPage };
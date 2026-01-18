const { BasePage } = require('./BasePage');

class SignupPage extends BasePage {
    constructor(page) {
        super(page);
        this.passwordInput = page.locator('[data-qa="password"]');
        this.firstNameInput = page.locator('[data-qa="first_name"]');
        this.lastNameInput = page.locator('[data-qa="last_name"]');
        this.addressInput = page.locator('[data-qa="address"]');
        this.stateInput = page.locator('[data-qa="state"]');
        this.cityInput = page.locator('[data-qa="city"]');
        this.zipcodeInput = page.locator('[data-qa="zipcode"]');
        this.mobileInput = page.locator('[data-qa="mobile_number"]');
        this.createAccountBtn = page.locator('[data-qa="create-account"]');
    }

    async fillAccountDetails(details) {
        await this.passwordInput.fill(details.password);
        await this.firstNameInput.fill(details.firstName);
        await this.lastNameInput.fill(details.lastName);
        await this.addressInput.fill(details.address);
        await this.stateInput.fill(details.state);
        await this.cityInput.fill(details.city);
        await this.zipcodeInput.fill(details.zipcode);
        await this.mobileInput.fill(details.mobile);
        await this.createAccountBtn.click();
    }
}

module.exports = { SignupPage };
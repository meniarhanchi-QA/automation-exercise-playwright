const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Autentification Tests', () => {
    test('Test case 3: Login User with incorrect email and password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('login');
        await loginPage.login('invalid_email@example.com', 'wrongPassword');
        const errorMessage = page.locator('text=Your email or password is incorrect!');
        await expect(errorMessage).toBeVisible();
    })
})
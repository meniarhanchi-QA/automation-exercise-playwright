const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { SignupPage } = require('../pages/SignupPage');

test.describe('User Registration', () => {
    test('Test Case 1: Register User Successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        
       
        const uniqueEmail = `testuser_${Date.now()}@test.com`; 
        
        await loginPage.navigate('login');
        await loginPage.startSignup('Gemini Tester', uniqueEmail);
        
        await signupPage.fillAccountDetails({
            password: 'Password123!',
            firstName: 'Gemini',
            lastName: 'Tester',
            address: '123 AI Boulevard',
            state: 'California',
            city: 'Mountain View',
            zipcode: '94043',
            mobile: '1234567890'
        }); 

        const successMessage = page.locator('[data-qa="account-created"]');
        await expect(successMessage).toBeVisible();
        await page.locator('[data-qa="continue-button"]').click();
    });
});
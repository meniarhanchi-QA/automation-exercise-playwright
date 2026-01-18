const { BasePage } = require('./BasePage');

class ContactPage extends BasePage {
    constructor(page) {
        super(page);
        this.nameInput = page.locator('[data-qa="name"]');
        this.mailInput = page.locator('[data-qa="email"]');
        this.subjectInput = page.locator('[data-qa="subject"]');
        this.messageInput = page.locator('[data-qa="message"]');
        this.uploadFile = page.locator('input[name="upload_file"]');
        this.submitbtn = page.locator('[data-qa="submit-button"]');
        this.successMsg = page.locator('.status.alert.alert-success');
    }
}
module.exports = { ContactPage };await page.goto('https://automationexercise.com/');
await page.getByRole('link', { name: ' Contact us' }).click();
await page.getByRole('textbox', { name: 'Name' }).click();
await page.getByRole('textbox', { name: 'Name' }).fill('Meniar');
await page.getByRole('textbox', { name: 'Email', exact: true }).click();
await page.getByRole('textbox', { name: 'Email', exact: true }).fill('meniar@gmail.com');
await page.getByRole('textbox', { name: 'Subject' }).click();
await page.getByRole('textbox', { name: 'Subject' }).fill('Exchange');
await page.getByRole('textbox', { name: 'Your Message Here' }).click();
await page.getByRole('textbox', { name: 'Your Message Here' }).fill('Hi');
await page.getByRole('button', { name: 'Choose File' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.locator('#contact-page')).toContainText('Contact Us');
await page.getByRole('heading', { name: 'Get In Touch' }).click();
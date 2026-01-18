class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(path = "") {
        
        await this.blockAds();
        await this.page.goto(`https://automationexercise.com/${path}`);
    }

    async blockAds() {
        
        await this.page.route('**/*adcopy*', route => route.abort());
        await this.page.route('**/*google*', route => route.abort());
        await this.page.route('**/*doubleclick*', route => route.abort());
        await this.page.route('**/*adservice*', route => route.abort());
    }
}

module.exports = { BasePage };
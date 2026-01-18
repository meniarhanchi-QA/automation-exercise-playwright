const { BasePage } = require('./BasePage');

class ProductsPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = page.locator('#search_product');
        this.submitSearch = page.locator('#submit_search');
        this.allProductsTitle = page.locator('text=All Products');
        this.searchedProductsTitle = page.locator('text=Searched Products');
        this.productItems = page.locator('.single-products');
        this.firstProduct=page.locator('.single-products').first();
        this.addToCartBtn=page.locator('.overlay-content .add-to-cart').first();
        this.viewCartLink=page.locator('u:has-text("View Cart")');
 }
    async searchForProduct(productName){
        await this.searchInput.fill(productName);
        await this.submitSearch.click();
    }
async addFirstProductToCart() {
        await this.firstProduct.hover();
        
        await this.addToCartBtn.click(); 
        await this.viewCartLink.click();
    }

}
module.exports={ProductsPage};
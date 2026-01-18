const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');

test.describe('Products Search', () => {
    let productsPage;

    test.beforeEach(async ({ page }) => {
        productsPage = new ProductsPage(page);
        await productsPage.navigate('products');
    });

    test('Test Case 9: Search Product', async ({ page }) => {
        await expect(productsPage.allProductsTitle).toBeVisible();
        await productsPage.searchForProduct('tshirt');
        await expect(productsPage.searchedProductsTitle).toBeVisible();
        
        const count = await productsPage.productItems.count();
        expect(count).toBeGreaterThan(0);
    });
});
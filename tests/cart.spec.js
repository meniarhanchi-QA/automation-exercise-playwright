const { test, expect } = require('@playwright/test');
const { cartPage, CartPage } = require('../pages/CartPage');
const { ProductsPage } = require('../pages/ProductsPage');

test.describe('Cart Functionality', () => {
    test('Add product to cart and verify', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        await productsPage.navigate('products');
        await productsPage.addFirstProductToCart();
        const count = await cartPage.getCartCount();
        expect(count).toBeGreaterThan(0);
    })
})
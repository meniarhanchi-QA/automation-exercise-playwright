const {BasePage} = require ('./BasePage');

class CartPage extends BasePage {
    constructor(page){
        super(page);
        this.cartItems=page.locator('#cart_info_table tbody tr');
    }
    async getCartCount(){
        return await this.cartItems.count();
    }
}
module.exports={CartPage};
// const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddToCart extends Page {
    /**
     * define selectors using getter methods
     */
    get top () {
        return $('img[alt="Breathe-Easy Tank"]');
    }

    get topSize () {
        return $('body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ol:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)');
    }

    get topColor () {
        return $('body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ol:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)');
    }

    get btnAddToCart () {
        return $('body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ol:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4)');
    }

    get cartIcon () {
        return $('.counter-number')
    }

    get cartMsg () {
        return $('.message-success.success.message')
    }

    //This is to add an item to the cart
    //  */

    async cart (top, topSize, topColor) {
        await this.top.waitForDisplayed(top);
        await this.top.moveTo(1,1);
				await this.topSize.click();
				await this.topColor.click();
				await this.btnAddToCart.click();
        await this.cartIcon.getValue();
        // await this.cartMsg.waitForDisplayed(top);

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('women/tops-women.html');
    }

}
module.exports = new AddToCart();
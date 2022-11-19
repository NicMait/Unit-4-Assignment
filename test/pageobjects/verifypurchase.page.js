const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifyAPurchase extends Page {
    /**
     * define selectors using getter methods
     */
    get dropDown () {
        return $('#div[class="panel header"] button[type="button"]');
    }

    get Account () {
        return $('div[class="sidebar sidebar-main"] li:nth-child(2) a:nth-child(1)')
    }

    get myOrders () {
        return $('div[class="sidebar sidebar-main"] li:nth-child(2) a:nth-child(1)')
    }


	  get orderHistory () {
			return $('[href="https://magento.softwaretestingboard.com/sales/order/view/order_id/4855/"]');
	  }



    //This is to add an item to the cart
    //  */
    async verify (dropDown, Account, ) {
        await this.dropDown.isDisplayed(dropDown);
		await this.dropDown.click();
        await this.Account.isDisplayed(Account);
		await this.Account.click();
		await this.myOrders.click();
		await this.orderHistory.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/');
    }

	}

module.exports = new VerifyAPurchase();
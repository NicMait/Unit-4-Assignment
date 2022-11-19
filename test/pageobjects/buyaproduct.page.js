

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BuyAProduct extends Page {
    /**
     * define selectors using getter methods
     */
     get cart () {
      return $('.action.showcart');
   }

   get proceedToCheckout () {
      return $('#top-cart-btn-checkout');
   }

   //  get inputEmail () {
   //      return $('#username');
   //  }

   get pageHeader () {
      return $('li[id="shipping"] div[class="step-title"]')
   }

   //  get inputFirstName () {
   //      return $('input[name="firstname"]')
   //  }

   //  get inputLastName () {
   //      return $('#FK2OQWM')

   // //  get inputCompany () {
   // //      return $('button[title="Add To Cart"]');
   // //  }

	  get inputStreetAddress () {
			return $('input[name="street[0]"]');
	  }

  		get inputStreetAddressOne () {
				return $('input[name="street[1]"]');
		}

		get inputStreetAddressTwo () {
      return $('input[name="street[2]"]');
		}

		get inputCity () {
      return $('input[name="city"]');
		}

      get stateDropDown () {
         return $('select[name="region_id"]')
       }

		get stateDropDownOption () {
         // return $('option[data-title="California"]')
      return $('div[name="shippingAddress.region_id"] option:nth-child(19)')
		}

      get inputZipCode () {
         return $('input[name="postcode"]')
         }

		get countryDropDown () {
      return $('select[name="country_id"]')
		}

      get countryDropDownOption () {
         return $('option[value="US"]')
         }

		get inputPhoneNumber () {
      return $('input[name="telephone"]')
		}

		get selectShipping () {
      return $('input[value="tablerate_bestway"]')
		}

		get btnNext() {
      return $('.button.action.continue.primary')
		}

		get btnPlaceOrder() {
      return $('button[title="Place Order"]')
		}

		get orderConfirmation() {
      return $('.base')
		}

      get btnNext2() {
         return $('.button.action.continue.primary')
         }




    //This is to add an item to the cart
    //  */
    async buy(streetAddress, streetAddressOne, streetAddressTwo, city, number, zipCode) {
        await this.inputStreetAddress.setValue(streetAddress);
        await this.inputStreetAddressOne.setValue(streetAddressOne);
        await this.inputStreetAddressTwo.setValue(streetAddressTwo);
        await this.inputCity.setValue(city);
        await this.stateDropDown.click();
        await this.stateDropDownOption.click();
        await this.countryDropDown.click();
        await this.countryDropDownOption.click();
        await this.inputZipCode.setValue(zipCode);
        await this.inputPhoneNumber.setValue(number);
        await this.selectShipping.click();
        await this.btnNext.click();
        await this.btnPlaceOrder.click();
        await this.orderConfirmation.waitForDisplayed();



    }

   //  async proceed () {
   //    await this.selectShipping.click();
   //    await this.btnNext2.click();
   //  }


    /**
     * overwrite specific options to adapt it to page object
//      */
   open () {
   return super.open('checkout/#shipping');
    }

   }
module.exports = new BuyAProduct();
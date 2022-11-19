const LoginPage = require('../pageobjects/login.page');
const WelcomePage = require('../pageobjects/welcome.page');
const AddToCart = require('../pageobjects/addtocart.page');
const BuyAProduct = require('../pageobjects/buyaproduct.page');
const inputStreetAddress = require('../pageobjects/buyaproduct.page');


// //Test to purchase a product.This is the user's first purchase.
describe.only('Purchase A Product', () => {
	it('should purchase a product', async () => {
		//Customer logs in
		await LoginPage.open();
		await LoginPage.login('thetester2@yopmail.com', 'Password123!');
		await expect(WelcomePage.welcomeMsg).toBeExisting();
		await expect(WelcomePage.welcomeMsg).toHaveTextContaining(
			'Welcome',{ignoreCase:true});

		//Adds a product to their cart
		await AddToCart.open();
		await expect (AddToCart.topSize).toBeClickable();
		await AddToCart.topSize.click();
		await expect (AddToCart.topColor).toBeClickable();
		await (AddToCart.topColor).click();
		await expect (AddToCart.btnAddToCart).toBeClickable();
		await AddToCart.btnAddToCart.click();

		//Goes to checkout page

		await expect(BuyAProduct.cart).toBeExisting();
		await BuyAProduct.cart.waitForClickable({ timeout: 7000 });
		await BuyAProduct.cart.click();
		await expect (BuyAProduct.proceedToCheckout).toBeExisting();
		await BuyAProduct.proceedToCheckout.waitForClickable();
		await BuyAProduct.proceedToCheckout.click();
		await expect(BuyAProduct.pageHeader).toBeExisting();
		await expect(BuyAProduct.pageHeader).toHaveTextContaining(
				'Shipping Address');

		//User already has a default address

		// if(BuyAProduct.inputStreetAddress === " "){

		// await expect(BuyAProduct.selectShipping).waitForClickable();
		// await BuyAProduct.selectShipping.click();
		// await	expect(BuyAProduct.btnNext2).toBeClickable();
    // await BuyAProduct.btnNext2.click();


		// // 		// User does not have a default address

    // } else{
					await BuyAProduct.buy('1234', 'Sarno Road', 'Korea Town','Melbourne','597-643-5484', '33313');
		// 		}

			});





	});








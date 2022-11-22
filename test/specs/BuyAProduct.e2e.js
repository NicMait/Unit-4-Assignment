const LoginPage = require('../pageobjects/login.page');
const WelcomePage = require('../pageobjects/welcome.page');
const AddToCart = require('../pageobjects/addtocart.page');
const BuyAProduct = require('../pageobjects/buyaproduct.page');
// const inputStreetAddress = require('../pageobjects/buyaproduct.page');
// const { btnPlaceOrder } = require('../pageobjects/buyaproduct.page');


// //Test to purchase a product.This is the user's first purchase.
describe.only('Purchase A Product', () => {
	it('should purchase a product', async () => {
		// Customer logs in
		await LoginPage.open();
		await LoginPage.login('thetester2@yopmail.com', 'Password123!');
		await expect(WelcomePage.welcomeMsg).toBeExisting();
		await expect(WelcomePage.welcomeMsg).toHaveTextContaining(
			'Welcome',{ignoreCase:true});

		//Adds a product to their cart
		await AddToCart.open();
		await (AddToCart.topSize).waitForClickable();
		await AddToCart.topSize.click();
		await (AddToCart.topColor).waitForClickable();
		await (AddToCart.topColor).click();
		await (AddToCart.btnAddToCart).waitForClickable();
		await AddToCart.btnAddToCart.click();

		//Goes to checkout page
    await expect (BuyAProduct.cart).toBeExisting();
		await BuyAProduct.cart.waitForClickable({ timeout:3000 });
		await BuyAProduct.cart.click();
		// await expect (BuyAProduct.proceedToCheckout).toBeExisting();
		// await BuyAProduct.proceedToCheckout.waitForClickable();
		await BuyAProduct.proceedToCheckout.click();
		await expect(BuyAProduct.pageHeader).toBeExisting();
		await expect(BuyAProduct.pageHeader).toHaveTextContaining(
				'Shipping Address');

		// //User already has a default address



		// await expect(BuyAProduct.selectShipping).waitForClickable();
		// await BuyAProduct.selectShipping.click();
		await BuyAProduct.btnNext.waitForClickable();
    await BuyAProduct.btnNext.click();
		await BuyAProduct.btnPlaceOrder.waitForClickable();
		await BuyAProduct.btnPlaceOrder.click();


		// // // 		// User does not have a default address

    // // } else{
		// // 			await BuyAProduct.buy('1234', 'Sarno Road', 'Korea Town','Melbourne','597-643-5484', '33313');
		// // // 		}

			});





	});








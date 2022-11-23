const AddToCart = require('../pageobjects/addtocart.page');
const LoginPage = require('../pageobjects/login.page');
const WelcomePage = require('../pageobjects/welcome.page');

// add a product to the cart

describe('Add to Cart', () => {

	it('should add an item to the cart', async () => {

		//User log in

        await LoginPage.open();//opening the sign in page
        await LoginPage.login("thetester2@yopmail.com", 'Password123!');//login with valid credentials
        await expect(WelcomePage.welcomeMsg).toBeExisting();
        await expect(WelcomePage.welcomeMsg).toHaveTextContaining(
            'Welcome',{ignoreCase:true});

			//User goes to the Women's Tanks page and adds a product to their
			await AddToCart.open();
			await expect (AddToCart.topSize).toBeClickable();
			await AddToCart.topSize.click();
			await expect (AddToCart.topColor).toBeClickable();
			await (AddToCart.topColor).click();
			await expect (AddToCart.btnAddToCart).toBeClickable();
			await (AddToCart.btnAddToCart).click();
			await expect(AddToCart.cartMsg).toHaveTextContaining(
				            'You added', 'to your cart');



	});

});
const LoginPage = require('../pageobjects/login.page');
const WelcomePage = require('../pageobjects/welcome.page');
const VerifyAPurchase = require('../pageobjects/verifypurchase.page');

// Verify that product was purchased via order history
describe('My Order History', () => {
	it('should view the order history', async () => {
				//Returning user logs in
			await LoginPage.open();
			await LoginPage.login('utestnicolem@gmail.com', 'Password123!');
			await expect(WelcomePage.welcomeMsg).toBeExisting();
			await expect(WelcomePage.welcomeMsg).toHaveTextContaining(
				            'Welcome',{ignoreCase:true});

			// User views order history
			await expect (VerifyAPurchase.myOrders).toBeExisting();
			await (VerifyAPurchase.myOrders).click();
			await expect (VerifyAPurchase.orderHistory).toBeDisplayed();
			await (VerifyAPurchase.orderHistory).click();
			await expect (VerifyAPurchase.OrderNumber).toBeDisplayed();


	});

});
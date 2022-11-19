// const LoginPage = require('../pageobjects/login.page');
// const WelcomePage = require('../pageobjects/welcome.page');
// const VerifyAPurchase = require('../pageobjects/verifypurchase.page');

// // Verify that product was purchased via order history
// describe('My Order History', () => {
// 	it('should view the order history', async () => {
// 			await LoginPage.open();
// 			//Returning user logs in

// 			await LoginPage.login('utestnicolem@gmail.com', 'Password123!');
// 			await expect(WelcomePage.welcomeMsg).toBeExisting();
// 			await expect(WelcomePage.welcomeMsg).toHaveTextContaining(
// 					'Welcome','msg');

// 			// await VerifyAPurchase.open();
// 			// await expect (VerifyAPurchase.Account).toBeExisting();
// 			// await (VerifyAPurchase.Account).click();
// 			await expect (VerifyAPurchase.myOrders).toBeExisting();//get order history
// 			await (VerifyAPurchase.myOrders).click();
// 			await expect (VerifyAPurchase.orderHistory).toBeDisplayed();
// 			await (VerifyAPurchase.orderHistory).click();


// 	});

// });
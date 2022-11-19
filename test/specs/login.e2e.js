// const LoginPage = require('../pageobjects/login.page');
// const WelcomePage = require('../pageobjects/welcome.page');

// describe('My Login to LOMA', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();//opening the sign in page

//         await LoginPage.login("thetester2@yopmail.com", 'Password123!');//login with valid credentials
//         await expect(WelcomePage.welcomeMsg).toBeExisting();
//         await expect(WelcomePage.welcomeMsg).toHaveTextContaining(
//             'Welcome',{ignoreCase:true});
// 				});

// 			});

// 		                // unhappy path test  Logging ij with invalid credential

// describe('My Login to LOMA', () => {
//       it('should not login with invalid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('utestnicolem@gmail.com', 'Hacker');
//         await expect(LoginPage.errorMsg).toBeExisting();
//         await expect(LoginPage.errorMsg).toHaveTextContaining(
//                 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
//         });
// });



const Create = require ('../pageobjects/signup.page')


// new user should be able to create an account
describe('Create Account', () => {
	it('should create a new account', async () => {
			await Create.open();
			await Create.account('Martin', 'Odegaard', 'webtest4@yopmail.com', 'Password123!', 'Password123!');
			await expect(Create.success).toBeExisting();
      await expect(Create.success).toHaveTextContaining(
				'Thank you for registering with Fake Online Clothing Store.');
		    });



// 	});

// Unhappy Path Test--Sign up a user that already has an account
// describe('Create Account', () => {
// 	it('should not sign up an existing customer', async () => {
// 			await Create.open();
// 			await Create.account('Link', 'Neal', 'utestnicolem@gmail.com', 'Password123!', 'Password123!');
//       await expect(Create.error).toBeExisting();
//       await expect(Create.error).toHaveTextContaining(
// 				'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.');
// 		    });

	// });

});


const Create = require ('../pageobjects/signup.page')


// new user should be able to create an account
describe('Create Account', () => {
	it('should create a new account', async () => {
			await Create.open();
			await Create.account('Martin', 'Odegaard', 'marsenal2@yopmail.com', 'Password123!', 'Password123!');

	});

});




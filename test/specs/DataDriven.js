const LoginPage = require('../pageobjects/login.page');
const WelcomePage = require('../pageobjects/welcome.page');
const loginData = require('../data/loginData');


describe('My Login to LOMA', () => {
	for(const record of loginData){
    it('should attempt to login the ${record. email}', async () => {
			//opening the sign in page
        await LoginPage.open();
				await LoginPage.login(record.email, record.password);
				if(record.email === "marsenal2@yopmail.com"){
        	await expect(browser).toHaveUrl(record.expectedUrl);
        	// await expect(LoginPage.welcomeMsg).toHaveTextContaining(
          //   'Welcome',{ignoreCase:true});
					} else {
						await expect(browser).toHaveUrl(record.expectedUrl);
					}
				});
			}
		});
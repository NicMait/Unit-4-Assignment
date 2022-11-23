const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName() {
        return $('#firstname');
    }

    get inputLastName () {
        return $('#lastname');
    }

    get inputEmail () {
        return $('#email_address');
    }

    get inputPassword () {
        return $('#password');
    }

		get inputConfirmPassword () {
			return $('#password-confirmation');
	}

		get btnSubmit () {
			return $('button[title="Create an Account"]');
    }

    get success() {
        return $('div[role="alert"]');
     }

    get error() {
        return $('.message-error.error.message');
     }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async account (firstname, lastname, email, password, passwordConfirmation) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
		await this.inputEmail.setValue(email);
		await this.inputPassword.setValue(password);
		await this.inputConfirmPassword.setValue(passwordConfirmation);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/create/');
    }
}

module.exports = new CreateAccountPage();
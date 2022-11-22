// const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('input[title="Email"]');
    }

    get inputPassword () {
        return $('#pass');
    }

    get btnSubmit () {
        return $('button[class="action login primary"]');
    }

    get errorMsg () {
        return $('.message-error.error.message');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/login');
    }
}

module.exports = new LoginPage();

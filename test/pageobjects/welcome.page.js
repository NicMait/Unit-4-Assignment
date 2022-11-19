const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WelcomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeMsg () {
        return $('.panel.wrapper');
    }
}

module.exports = new WelcomePage();

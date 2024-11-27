const { Builder, By } = require('selenium-webdriver');

async function loginSauceDemo() {
    // Set up WebDriver
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the Sauce Demo login page
        await driver.get('https://www.saucedemo.com/');
        console.log('Navigated to Sauce Demo.');

        // Find and interact with the username field
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');

        // Find and interact with the password field
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');

        // Click the login button
        await driver.findElement(By.id('login-button')).click();

        console.log('Login button clicked.');

        // Add a delay to observe the result (optional)
        await new Promise(resolve => setTimeout(resolve, 5000));

        // You can add validation logic here to check login success
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the browser
        await driver.quit();
    }
}

loginSauceDemo();

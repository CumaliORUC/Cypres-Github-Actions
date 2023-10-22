const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners 
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    BaseUrl:"https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  }
});

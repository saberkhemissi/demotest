const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    
  },

  env: {
  
      "local": {
        "url": "https://fr.foncia.com/"
      },
      "test": {
        "url": "https://fr.foncia.com/"
      },
      "baseUrl": {
        "url": "https://fr.foncia.com/"
      }
   
  },
  e2e: {
    specPattern: "**/HomeTest.feature",
    prod: {
      "url": "https://fr.foncia.com/"
    },
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      return config;
    },
    testIsolation: false,
  },
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_HOST_URL || 'http://localhost:8000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    screenshotOnRunFailure: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
  },
  pageLoadTimeout: 60000,
  retries: {
    runMode: 2,
    openMode: 0
  }
});

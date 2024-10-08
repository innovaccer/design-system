const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'u5oh2w',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  pageLoadTimeout: 60000
});

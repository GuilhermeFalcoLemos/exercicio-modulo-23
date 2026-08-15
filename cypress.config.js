const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "mochawesome-report",
    overwrite: false,
    reportFilename: "mochawesome",
    html: false,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  }
});
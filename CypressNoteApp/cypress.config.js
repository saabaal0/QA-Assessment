const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practice.expandtesting.com/notes/app",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureAttachRequests: true,
      allureAddVideoOnPass: true
    }
  },
  video: true
});
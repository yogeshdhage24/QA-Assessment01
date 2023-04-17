const { defineConfig } = require ("cypress");

module.exports = defineConfig({

  e2e:{
    directConnect: true,
    allScriptTimeout: 45000,
    baseUrl: "http://localhost:4200",// set the base URL for all tests
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
  
    },
   
});
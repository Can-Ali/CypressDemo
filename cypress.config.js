const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'mochawesome', // Use the mochawesome reporter for HTML reports
  retries: {
    runMode: 2,
  },
  scripts: {
    'cypress:open': 'cypress open',
    'cypress:run': 'cypress run ',
  },
  viewportWidth: 1024,
  viewportHeight: 768,
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  compilerOptions: {
    allowJs: true,
    types: ['cypress'],
  },
  include: '**/*.*',
  projectId: 'rcz5jm',


  // Use reporterOptions directly in the configuration for mochawesome
  reporterOptions: {
    reportDir: 'cypress/reports', // Specify the directory for the reports
    overwrite: false,
    html: true, // Generate HTML reports
  },


  e2e: {
    baseUrl: "https://portal.decibel.com",
  },
});



// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   retries: {
//     runMode: 1,
//   },
//   scripts: {
//     "cypress:open": "cypress open",
//     "cypress:run": "cypress run",
//     "test": "npm run cypress:open"
//   },

//   viewportWidth: 1024,
//   e2e: {
//     baseUrl:"https://portal.decibel.com",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });



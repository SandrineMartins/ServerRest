const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  e2e: {
    baseUrl: 'https://serverest.dev',
    env: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}
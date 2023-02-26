'use strict'

//const assert = require('assert')
const dotenv = require('dotenv')


// read in the .env file
dotenv.config()

// capture the environment variables the application needs
const {
  API_URL,
  API_AUTH_KEY,
  BOT_TOKEN,
  CLIENT_ID,
  SERVER_ID
} = process.env

// export the configuration information
module.exports = {
  api: {
    url: API_URL,
    key: API_AUTH_KEY 
  },

  token: BOT_TOKEN,
  client: CLIENT_ID,
  server: SERVER_ID
}

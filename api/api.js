const axios = require('axios')
const { api } = require('../config.js')


const instance = axios.create()
instance.defaults.baseURL = api.url
axios.defaults.headers.common['x-api-key'] = `${api.key}`

const instanceAbsolute = axios.create()

module.exports = {
  base: instance,
  absolute: instanceAbsolute
}
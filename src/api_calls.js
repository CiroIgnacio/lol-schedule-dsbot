'use strict'
const { base: api } = require('../api/api')
const { api: cfg  } = require('../config');

const apiConfig = {
  headers: {'x-api-key': `${cfg.key}`}, 
}

const apicall = async () => {
    const response = await api.get(cfg.url, apiConfig)
    return response
}


module.exports = {
  apicall
}



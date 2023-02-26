'use strict'
const { createLogger, format, transports } = require('winston')
// require('winston-daily-rotate-file');
const fs = require('fs')
const path = require('path')

const logDir = path.join(process.cwd(), 'log')
const env = process.env.NODE_ENV || 'production'

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}


const filename = path.join(logDir, 'schedule-lol.log')

const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(info => `${info.timestamp} | ${info.level} | ${info.message}`)
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      format: format.combine(
        format.colorize({ all: true }),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    new transports.File({ filename: filename, level: 'info' })
    // dailyRotateFileTransport
  ]
})

module.exports = logger

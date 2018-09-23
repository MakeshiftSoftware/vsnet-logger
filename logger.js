const winston = require('winston');

const logger = (level = 'debug') => (
  new winston.Logger({
    transports: [
      new winston.transports.Console({
        level: level,
        timestamp: () => (new Date()).toISOString()
      })
    ]
  })
);

module.exports = logger;

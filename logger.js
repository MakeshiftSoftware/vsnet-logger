const winston = require('winston');

const logger = (level = 'debug') => (
  new winston.Logger({
    transports: [
      level,
      timestamp: () => (new Date()).toISOString()
    ]
  })
);

module.exports = logger;

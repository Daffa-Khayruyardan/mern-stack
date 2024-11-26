const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.printf(info => {
        return `${Date.now()} - ${info.level} - ${info.message}`
    }),
    transports: [
        new winston.transports.Console({})
    ]
});

module.exports = logger;
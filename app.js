
const winston = require('winston');
const { combine, timestamp, label, printf, json } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(),json()),
  defaultMeta: { service: 'user-service' },
  transports: [
    //new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

logger.info("info")
logger.warn("warn")
logger.error("error")
//logger.debug("debug")
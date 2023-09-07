const winston = require("winston");
const NODE_ENV = "prod";
const path = require("path");
const winstonFormat =
  NODE_ENV === "production"
    ? winston.format.combine(winston.format.simple())
    : winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      );
const combinedLog = path.join(__dirname, "./../logs/info.log");
//console.log("combinedLog-->",combinedLog)
const errorLog = path.join(__dirname, "./../logs/error.log");

const winstonLogger = winston.createLogger({
  level: "info",
  format: winstonFormat,
  handleExceptions: true,
  prettyPrint: true,
  defaultMeta: {
    service: "utr-update-service",
  },
  transports: [
    // to append info logs in info.log
    new winston.transports.File({
      filename: combinedLog,
    }),
    // to append error logs in error.log
    new winston.transports.File({
      filename: errorLog,
      level: "error",
    }),
    // to print logs in cli / console
    new winston.transports.Console({ level: "info" }),
  ],
});

module.exports = {
  winstonLogger,
};

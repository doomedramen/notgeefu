require("colors");
const logger = new console.Console(process.stdout, process.stderr);

module.exports = {
  info: (...args) => {
    logger.log(args.join(" ").blue)
  },
  error: (...args) => {
    logger.log(args.join(" ").red)
  },
  success: (...args) => {
    logger.log(args.join(" ").green)
  }
};
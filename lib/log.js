/* eslint-disable no-console */

require("colors");

module.exports = {
  info: (...args) => {
    console.log(args.join(" ").blue);
  },
  error: (...args) => {
    console.error(args.join(" ").red);
  },
  success: (...args) => {
    console.log(args.join(" ").green);
  }
};
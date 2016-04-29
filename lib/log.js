require('colors');
const logger = new console.Console(process.stdout, process.stderr);

function build(args) {
  var message = '';
  for (var i = 0; i < args.length; ++i) {
    message += args[i];
    if (i < args.length - 1) message += ' ';
  }
  return message;
}

module.exports = {
  info: function () {
    logger.log(build(arguments).blue);
  },
  error: function () {
    logger.error(build(arguments).red);
  },
  success: function () {
    logger.log(build(arguments).green);
  }
};
var colors = require("colors");

function build(args) {
  var message = "";
  for (var i = 0; i < args.length; ++i) {
    message += args[i];
    if (i < args.length - 1) {
      message += " ";
    }
  }
  return message;
}

module.exports = {

  info: (inputs) =>{
    Console.log(build(arguments).blue);
  },
  error: (inputs) =>{
    Console.log(build(arguments).red);
  },
  success: (inputs) => {
    Console.log(build(arguments).green);
  }
};
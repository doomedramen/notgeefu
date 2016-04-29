require("colors");

//const out = getStreamSomehow();
//const err = getStreamSomehow();
//const logger = new console.Console(out, err);

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

  info: (inputs) => {
    process.stdout.write(build(arguments).blue);
  },
  error: (inputs) => {
    process.stderr.write(build(arguments).red);
  },
  success: (inputs) => {
    process.stdout.write(build(arguments).green);
  }
};
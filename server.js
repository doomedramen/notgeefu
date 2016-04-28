var app = require('./app');
var log = require('./lib/log');

var port = process.env.NGFPORT || '3000';

app.listen(port, '0.0.0.0', function () {
  log.success('Listening on port', port);
});
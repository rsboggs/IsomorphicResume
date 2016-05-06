'use strict';

require('babel-core/register')({});
require('babel-polyfill');

var server = require('./server').default;
var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("Magic happens on Port", port);
});

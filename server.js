var express = require('express');
var app = express();
var port = process.env.PORT || 3005;
var request = require('request');
var apicache = require('apicache').options({ debug: true }).middleware;
var standingsRoute = require('./routes/standings');

app.use(express.static('public', { maxAge: '5d' }));

if ( process.env.NODE_ENV != 'production') {
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  var webpackMiddlewareConfig = {
    noInfo: true,
    publicPath: config.output.publicPath
  }
  app.use(require("webpack-dev-middleware")(compiler, webpackMiddlewareConfig));
  app.use(require("webpack-hot-middleware")(compiler));
}

app.get('/standings', apicache('1 hour'), require('./routes/standings'));
app.get('/*', require('./routes/index'));
app.listen(port, listenAndLog);

function listenAndLog() {
  console.log('Listening at localhost:' + port);
}

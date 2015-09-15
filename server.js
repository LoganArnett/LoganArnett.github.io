// meanFolio server.js

// modules ========
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// config

// config files
var db = require('./config/db');

// set port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/meanpress');

// get all data of the body in (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));
var CORS = function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'Content-Type');
// some browsers send a pre-flight OPTIONS request to check if CORS is enabled so you have to also respond to that
if ('OPTIONS' === req.method) {
  res.send(200);
}
else {
  next();
}
};
app.use(CORS);

// set static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ========
require('./app/routes')(app);

// start app =========
// start our app at localhost:8080
app.listen(port);

// confirmation
console.log('TADA, Live on port ' + port);

// expose app
exports = module.exports = app;

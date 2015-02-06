var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var port = process.env.PORT || 4568;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/*', function(req, res) {
    res.redirect('/');
});

// // Cookie & Session
app.use(cookieParser());
app.use(session({secret: '123Secret', cookie: {maxAge: 60000}}));

app.listen(port, function () {
	console.log('Server now listening on port ' + port);
});
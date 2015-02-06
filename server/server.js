var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var port = process.env.PORT || 4568;

app.set('public', __dirname + '/public');
app.use(express.static(__dirname + '/public'));

// Cookie & Session
app.use(cookieParser());
app.use(session({secret: '123Secret', cookie: {maxAge: 60000}}));

app.listen(port, function () {
	console.log('Server now listening on port ' + port);
});

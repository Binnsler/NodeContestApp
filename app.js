var submissions = require('./models/submissions.js')
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


// Get Routes
app.get('/', indexController.index);

app.get('/submissions', indexController.submissions);

app.get('/contest-full', indexController.contestFull);


// Post Routes
app.post('/submit', indexController.submit);

app.post('/vote', indexController.vote);

app.post

var server = app.listen(3328, function() {
	console.log('Express server listening on port ' + server.address().port);
});

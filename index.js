'use strict';

var express       = require('express');
var http          = require('http');
var bodyParser    = require('body-parser');
var multer        = require('multer');
var favicon       = require('serve-favicon');
var upload        = multer();
var port          = process.env.PORT || 3000;
var app           = express();
var server        = http.createServer(app);
var handlers      = require('./api/handlers.js');

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.route('/content')
  .get(handlers.getContent)
  .post(upload.single('picture'), handlers.updateContent);

server.listen(port, function() {
  console.log('Express HTTP server listening on port ' + port + '!');
});
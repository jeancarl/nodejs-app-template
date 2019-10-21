var express = require('express');
var os = require('os');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Welcome to my app');
});

app.get('/health', function(req, res) {
  res.json({"status": "OK"});
});

app.get('/host', function(req, res) {
  res.json({"hostname": os.hostname()});
});

app.listen(PORT)
console.log('Application Running on port ' + PORT);
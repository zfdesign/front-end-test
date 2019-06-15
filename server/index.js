var express = require('express');
var app = express();
var draftLabel = require('./draftLabel.json');

var SERVER_PORT = 3004;

app.get('/draft-label', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send(JSON.stringify(draftLabel));
});

app.listen(SERVER_PORT, () => console.log('Order service listening on http://localhost:' + SERVER_PORT));

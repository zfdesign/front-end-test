var express = require('express');
var app = express();
var labels = require('./draftLabel.json');

var SERVER_PORT = 3004;

app.get('/draft-label', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(labels));
});

app.listen(SERVER_PORT, () => console.log('Order service listening on http://localhost:' + SERVER_PORT));

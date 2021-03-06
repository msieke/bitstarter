var express = require('express');
var fs = require('fs');
var indexFile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var file = fs.readFileSync(indexFile);
    response.send(file.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs');

fs.readFileSync('index.html', function(err, data) {
  if (err) throw err;
  buf = new Buffer(data.length);
  len = buf.write(data, 0, 'utf-8');
  console.log(data);
}

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

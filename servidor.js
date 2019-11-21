var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('<b>Hola</b>');
}).listen(process.env.PORT);

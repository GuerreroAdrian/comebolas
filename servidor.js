var http = require('http');
var url = require('url');

var jugadores = [];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  
  if(JSON.parse(q.jugador)){
    res.end('Interpretado');
  } else {
     res.end('Lista de Nombres ' + nombres.join());
  } 
}).listen(process.env.PORT);

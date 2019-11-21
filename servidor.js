var http = require('http');
var url = require('url');

var jugadores = [];

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  
  if(q.jugador){
    var jugador = JSON.parse(q.jugador);
    if(typeof jugador.nom === 'string' && 
       typeof jugador.pos === 'object' && 
       typeof jugador.pos.length === 'number' && 
       jugador.pos.length === 2 &&
       typeof jugador.tam === 'number'){
        var indice = -1;
      for(var i = 0; i < jugadores.length; i++){
        if(jugadores[i].nom === jugador.nom){
          indice = i;
          break;
        }
      }
      if(indice < 0){
        jugadores.push(jugador);
        res.end('Jugador Creado');
      } else {
        jugadores[indice] = jugador;
        res.end('Jugador Actualizado');
      }
       } else {
        res.end('incorrecto');
       }
  } else {
     res.end('Error');
  } 
}).listen(process.env.PORT);

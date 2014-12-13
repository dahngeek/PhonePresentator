// PhonePresentator
// Use your smartphone to change your slides :)
// Mady by dahngeek
// URL: dahngeek.com

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var keyboard = require('node_keyboard');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  	socket.on('flecha', function (data){
  		var comando = data.command;
  		if (comando == 'prev') {
  			console.log(comando);
  			keyboard.press(keyboard.Key_Left);
  			keyboard.release(keyboard.Key_Left);
  		} else if (comando == 'next') {
  			console.log(comando);
  			keyboard.press(keyboard.Key_Up);
  			keyboard.release(keyboard.Key_Up);
  		};
  	});
   socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
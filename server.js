var http = require('http');
var fs = require('fs');
var connect = require('connect');

var server = http.createServer(
		connect()
			.use(connect.static('../client'))
			.use(connect.directory('../client'))
	);

var io = require('socket.io').listen(server);

server.listen(80);

io.sockets.on('connection', function (socket) {
  socket.on('msg', function (data) {
	socket.broadcast.emit('msg', data);
  });
});
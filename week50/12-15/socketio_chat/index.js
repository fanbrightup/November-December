var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname+"/index.html");
});

io.on('connection', function(socket){
  socket.broadcast.emit('hi','新');
  console.log('a user connected');
  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    //  也可以发送一个对象过去,然后obj.fieldname  来调用某个具体的值
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

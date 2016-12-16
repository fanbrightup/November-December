var fs = require("fs");
var app = require("http").createServer(handler);
var io = require("socket.io").listen(app);
// 先同步读取文件放入缓存,可以提高效率
var html = fs.readFileSync("./demo2_index.html");
function handler(req,res){
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length',Buffer.byteLength(html));
  res.write(html);
  res.end();
}

// function tick(socket){
//   var now = new Date().toUTCString();
//   socket.emit('showTime',now);
// }
io.on("connection",(socket)=>{
  console.log(socket.id);
  var so = socket;
  setInterval(()=>{
    var now = new Date().toUTCString();
    // 这里要多次使用socket的话只能使用功能io.sockets来指代socket,socket只能使用一次
    // io.sockets.emit('showTime',now);  向所有的socket发送
    so.emit('showTime',now);
    //  一种解决方法,socket会在多次重复调用中丢失,将socket赋值给so,在后边的重复调用中使用so来进行处理
  },1000);
})

app.listen(3000);

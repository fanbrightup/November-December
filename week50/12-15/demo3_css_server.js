var fs = require("fs");
var app = require("http").createServer(handler);
var io = require("socket.io").listen(app);
var url = require("url");
var html = fs.readFileSync('demo3_index.html');

function handler(req,res){
  var pathname = url.parse(req.url).pathname;
  if("/" == pathname){
    res.end(html);
  }else if("/favicon.ico" == pathname){
    res.end();
  }else{
    // console.log('');
  }
}
io.on("connection",(socket)=>{
  socket.emit("message","成功连接到服务器")
  console.log("新的连入")
})

app.listen(8000);

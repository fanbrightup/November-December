const net = require("net");
var server = net.createServer((socket)=>{
  socket.on("data",(data)=>{
    console.log("从客户端来的数据:"+data.toString())
  })
  socket.end("goodbye\n");
}).on("error",(err)=>{
  throw err;
})
server.listen(()=>{
  address = server.address();
  console.log("opened server on %j",address);
})

var http = require("http");
var server = http.createServer();
var handleReg = function(req,res){
  // writeHead是使用这种方式来整体写出响应代码和一个对象的形式来写出所有的首部.
  // setHeader(首部名,首部值);  是一对一对的写出的.
  res.writeHead(404,{"Content-Type":"text/plain","one":"two"});
  res.end("hello world");
}
server.on("request",handleReg);
server.listen(3000);

// const http = require("http");
// http.createServer((req,res)=>{
//   var str = "hello world 这是我";
//   // 要使用Buffer.byteLength才能正确的读到字节的长度.length属性读到的是可数出的字符个数.
//   // 但是每个汉子占了不止一个字节
//   res.setHeader("Content-Length",Buffer.byteLength(str));
//   当设定了字节的长度之后,不写res.end()也是可以的.但是如果不明确字节长度的话,没有res.end()是会导致服务器一直挂机的.
// res.write(str);
//   res.end();
// }).listen(3000);
const https = require("https");
const fs = require("fs");
var options = {
  key:fs.readFileSync('./key.pem'),
  cert:fs.readFileSync('./key-cert.pem')
}
https.createServer(options,deal).listen(3000);
function deal(req,res){
  var str = "hello world 这是我";
  res.setHeader("Content-Length",Buffer.byteLength(str));
  res.setHeader("Content-Type","text/plain");
  res.write(str);

}

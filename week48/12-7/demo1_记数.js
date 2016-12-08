const http = require("http");
var count = 0;
http.createServer((req,res)=>{
  count ++;
  res.end(`第${count}位来访`);
}).listen(3000);

var http = require('http');
http.createServer((req,res)=>{
  res.end('hello world 修改,再次修改' );
}).listen(3000);

var http = require("http");
var router = require("./demo2_router");
http.createServer((req,res)=>{
  router.router(req,res)
}).listen(3000);

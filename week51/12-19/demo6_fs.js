var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer((req,res)=>{
  var pathname = url.parse(req.url).pathname;
  if("/" === pathname){
    var data = fs.readdirSync("/home/try")

    res.end(data.toString());
  }else{
    res.end();
  }
}).listen(3000);

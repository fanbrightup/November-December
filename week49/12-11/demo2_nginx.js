var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer((req,res)=>{
  fs.readFile("index.html",(err,data)=>{

    res.end(data);
  })
  var pathname = decodeURI(url.parse(req.url).pathname);
  console.log(pathname);
}).listen(8000);

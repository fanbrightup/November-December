var http = require("http");
var url = require("url");
var fs = require("fs");
var staticModule = require("./staticModule");
http.createServer((req,res)=>{
  var pathname = url.parse(req.url).pathname;
  if("/index" == pathname || "/" == pathname){
    fs.readFile(__dirname + "/index.html",(err,data)=>{
      res.setHeader("Content-Type","text/html");
      res.end(data);
    })
  }else if("/favicon.ico" == pathname){
    res.end();
  }else{
    staticModule.deal(pathname,res,req);
  }
}).listen(3000);

var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer((req,res)=>{
  var pathname = url.parse(req.url).pathname;
  if("/" === pathname){
    fs.readFile(__dirname+"/index.html",(err,data)=>{
      if(err) throw err;
      res.setHeader("Content-Type","text/html");
      res.end(data);
    })
  }
});
server.listen(3000);

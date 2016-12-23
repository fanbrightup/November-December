const http = require("http");
const fs = require("fs");
const url = require("url");
var deal = require("./file_dir.js").deal;
var dirpath = '/home/try/Pictures/';
var items = [];
http.createServer((req,res)=>{
  var pathname = url.parse(req.url).pathname;
  var reg = /^\/files\/[a-zA-Z]+/;
  if('/' === pathname){
    fs.readFile("index.html",(err,data)=>{
      if(err) throw err;
      res.setHeader("Content-Type","text/html")
      res.end(data);
    })
  }else if('/files' == pathname){
    // 这里要通过具体的点击来判断点击的到底是文件还是目录,然后分别做安排
    var name = pathname.slice(7);
    function isDir(name){

    }


  }else{
    res.end('not found')
  }

}).listen(3000);

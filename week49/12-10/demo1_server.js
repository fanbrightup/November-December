"use strict";
var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer((req,res)=>{
  var pathname = url.parse(req.url).pathname;
  if("/select" == pathname){
    fs.readFile(__dirname+"/cc",(err,data)=>{
      if(err){
        console.log("something error");
      }
      res.end(data);
    })
  }else if("/" == pathname){
      fs.readFile(__dirname+"/demo1.html",(err,data)=>{
        if(err){
          console.log(err);
        }
        res.setHeader("Content-Type","text/html");
        res.setHeader("fan","me");
        res.end(data);
      })
  }else if("/json" == pathname){
     fs.readFile(__dirname+"/demo1_json数据.json",(err,data)=>{
        if(err)  console.log(err);
        // var str = JSON.stringify(data);
        // res.setEncoding("utf8");  不存在
        res.end(data);
      })
  }else{
    res.end("page not found");
  }

}).listen(3000);

var url = require("url");
var fs = require("fs");
module.exports.router =  function (req,res){
  var pathname = url.parse(req.url).pathname;
  if("/" == pathname){
    fs.readFile(__dirname+"/demo2_index.html",(err,data)=>{
      if(err) console.log(err);
      res.setHeader("Content-Type","text/html");
      res.end(data);
    });
  }else if("/search" == pathname){
    req.setEncoding("utf8");
    var name = '';
    req.on("data",(chunk)=>{  // 使用数据池来保存数据
      name+=chunk;
    })
    req.on("end",()=>{
      if(/^范/.test(name)){
        res.end("范先生");
      }else if(/^麦/.test(name)){
        res.end("麦小姐")
      }else{
        res.end(name);  // 一定要捕获所有的情况,并使用end结束,否则一直会处于一种连接状态拖垮服务器,并导致后边的请求无法被响应
      }
    })
  }else{
    res.end("page not found");
  }
}

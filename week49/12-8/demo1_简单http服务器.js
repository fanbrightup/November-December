const http = require("http");
const url = require("url");
const fs = require("fs");
http.createServer((req,res)=>{
  var pathName = url.parse(req.url).pathname;
  // console.log(pathName);
  var parm = pathName.substr(2);
  var firstParam = pathName.substr(1,1).toUpperCase();
  var s = firstParam + parm;
  console.log(s);
  // console.log(url.parse(req.url));
  // console.log(req.method);
  // console.log(req.headers);

  if("/favicon.ico" == pathName){  // 少写等号,写成了赋值
    // var file = "./image.jpg";
    // fs.readFile(file,(err,data)=>{
    //   if(err) console.log("error");
    //   res.end(data);
    // })
    return;
  }
  if("/index" == pathName){    //一定记住path是以 / 开头的  path 比 pathname多了 search的部分
    var file = "./demo1_index.html";
    fs.readFile(file,(err,data)=>{
      if(err)  console.log("error");
      res.end(data);
    })
  }else if("/image" == pathName){

    var file = "./image.jpg";
    fs.readFile(file,(err,data)=>{
      if(err) console.log("error");
      res.end(data);
    }
  )}else{  // 对别的不能匹配的路由进行响应,避免出现服务器崩溃的情况
      var str = "page not found";
      res.writeHead(404,{"Content-Type":"text/plain","Content-Length":str.length});
      res.end(str);
    }
  // res.end();
}
).listen(3000,"f");

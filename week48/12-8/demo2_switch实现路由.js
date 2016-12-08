const http = require("http");
const url = require("url");
const qs = require("querystring");
http.createServer((req,res)=>{
  var pathname = url.parse(req.url).pathname;  // pathname小写
  switch(pathname){
    case "/a":
      res.end("aaaaaaaaa");
      break;
    case "/b":
      res.end("bbbbbbbb");
      break;
    case "/c":
      res.end("cccccccc");
      break;
    default:
      var query = url.parse(req.url).query;
      var param = qs.parse(query);
      // console.log(typeof query);
      console.log(param);
      res.end(JSON.stringify(param));  //不能直接发送param这个对象,只能发送字符串或者Buffer数据

      break;
  }
}).listen(3000);

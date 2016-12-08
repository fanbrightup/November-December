const http = require("http");
const url = require("url");
const fs = require("fs");
var items = [];

items.push(new Date());
// 这个items必须要放在外面,否则不能正确显示
// 服务器每接收到一次请求就调用一次createServer里的匿名函数,每次都会创建一个新的items数组
// 当GET请求进来时,他碰到的是一个刚创建的空数组,所以什么都没有显示
http.createServer((req,res)=>{
  var method = req.method;
  switch (method) {
//   POST 逻辑
    case "POST":
      var item = '';
      req.setEncoding('utf8');
      req.on("data",(chunk)=>{
        item += chunk;
      });
      req.on("end",()=>{
        items.push(item);
        res.end("ok\n");
      })
      break;
//   GET逻辑
    case "GET":
      var msg = '';
      items.forEach((e,i)=>{
        msg += i + ') ' + e + '\n';
      });
      res.setHeader("Content-Length",Buffer.byteLength(msg));
      res.setHeader("Content-Type","text/plain;charset='utf-8'");
      // res.setHeader("charset",'utf-8');
      res.end(msg);
      break;
//   DELETE逻辑   curl -X DELETE  fan:3000/1   必须使用大写
    case "DELETE":
      var path = url.parse(req.url).pathname;
      var num = parseInt(path.slice(1),10);
      // delete items[num];  //会保留初始的序号,当删除顺序变化时,任然保留着被删除的空位
      items.splice(num,1);
      res.end("删除成功");
      break;
//   PUT逻辑   curl -x PUT -d "新的内容" fan:3000/1  多加上-d参数
    case "PUT":
      var myurl = url.parse(req.url);
      var num = parseInt(myurl.pathname.slice(1),10);
      req.setEncoding("utf8");
      var msg = '';
      req.on("data",(chunk)=>{
          msg += chunk;
      });
      req.on("end",()=>{
          items[num] = msg;
          res.end(`修改成功`);
      })
    default:
      break;

  }
}).listen(3000);

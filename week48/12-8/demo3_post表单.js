const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");
const personList = require("./demo3_personList");
personList.add("fan",1);
personList.add("li",2);
http.createServer((req,res)=>{
  var pathname = url.parse(req.url).pathname;
  switch(pathname){
    case "/":
      fs.readFile(__dirname+"/demo3_index.html",(err,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      });
      break;
    case "/add":
      var postData = '';
      req.setEncoding('utf8')
      req.on("data",(chunk)=>{  //  要使用数据池的方法,或者小的数据直接接收,但是一定是通过事件data来响应的这个数据.
                                //  不能通过解析的方式直接从req的各个属性参数中拿到这个表单数据.
        postData += chunk;
      });
      req.on("end",()=>{
        console.log(postData);
        var param = qs.parse(postData);
        personList.add(param.name,param.age);
        // console.log(param);
        personList.show();
        // console.log(param.name);
        // console.log(param.age);
      })
      // console.log(query);
      // res.setEncoding('utf8');
      //req.pipe(res);  // 自带了结束,所以不用显示的end结束
      res.writeHead(302,{"Location":"/"})
      res.end();
      break;
    case "/show":
      var data = personList.getStr();
      console.log(data);
      var s = `<html><body><pre>${data}</pre><script>alert('跳转到存档页面')</script></body></html>`;  // 单纯的js语句是不能传递到网页上去的,要包裹在html标签中
      res.setHeader("Content-Type","text/html");
      // res.write(s);
      res.end(s);
      break;
    case "/delete":
      personList.init();
      res.writeHead(302,{"Location":"/"})
      res.end();
      break;
    default:
      res.end("未找到");
  }
}).listen(3000);

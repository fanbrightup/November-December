const http = require("http");
const cp = require("child_process");
var server = http.createServer((req,res)=>{
  var child = cp.fork(__dirname+"/fib_斐波那契计算.js");
  child.on("message",(m)=>{
    res.end(m.result+"\n");
  })
  var input = parseInt(req.url.substring(1));
  console.log(req);
  child.send({input:input});
  var child_show = cp.fork(__dirname+"/show_url.js");
  child_show.on("message",(m)=>{
    res.end(m);
  })
  child_show.send(req.url);
}).listen(8000);
// req.url是端口号后的部分以一个/开头的地址localhost:8000/9是

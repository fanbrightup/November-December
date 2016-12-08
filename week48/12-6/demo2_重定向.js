const http = require("http");
http.createServer((req,res)=>{
    var url = 'http://localhost:3000';
    var body = `<p> Redirect to <a href=${url}> ${url} </a></p>`;
    res.statusCode = 302;
    // 如果不写statusCode=302的话,不会实现自动跳转.而是显示出body的内容
    res.setHeader("Location",url); // 这句是指定要跳转的位置.
    res.setHeader("Content-Length",body.length);
    res.setHeader("Content-Type","text/html");
    res.end(body);
}).listen(3001);

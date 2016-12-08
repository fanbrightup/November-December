const fs = require("fs");
const http = require("http");
const parse = require("url").parse;
const join = require("path").join;

var root = __dirname;
var server = http.createServer((req,res)=>{
  var url = parse(req.url);
  var path = join(root,url.pathname);
  fs.stat(path,(err,stat)=>{

    if(err){
      if('ENOENT' == err.code){
        res.statusCode = 404;
        res.end('Not Found');
      }else{
        res.statusCode = 500;
        res.end("内部错误");
      }
    }else{
      res.setHeader("Content-Length",stat.size);
      var stream = fs.createReadStream(path);
      stream.pipe(res);
      stream.on("error",(err)=>{
      res.statusCode = 500;
      res.end("内部错误");
  })
}
})
  // res.end();
});
server.listen(3000);

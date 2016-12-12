var fs = require("fs");
var path = require("path");
var base = __dirname+"/static";
var CACHE_TIME = 60*60*24*365;
exports.deal = function (pathname,res,req){
    var extname = path.extname(pathname);
    extname = extname?extname.slice(1):'';
    if(!extname){   // 如果没有后缀名
      fs.readFile(__dirname+"/index2.html",(err,data)=>{
        if(err){
          return;
          // res.end("not found");
        }
        res.setHeader("Content-Type","text/html");
        res.end(data);
      })
    }else{
      var mimeType = getMimeType(extname);
      var fileInfo = fs.statSync(base+pathname);
      var lastModified = fileInfo.mtime.toString();
      var date = new Date();
      date.setTime(date.getTime()+CACHE_TIME*1000);
      res.setHeader("Expires",date.toString());
      res.setHeader("Cache-Control","max-age="+CACHE_TIME);
      // 在chrome下不合理,在firefox下正常  有兼容性问题
      if(req.headers['If-Modified-Since'] && lastModified == req.headers['If-Modified-Since']){
        res.writeHead(304,"Not Modified");
        res.end();
      }else{

      fs.readFile(base+pathname,(err,data)=>{
        if(err) {
          res.end("not found");
          return; // return要放在res.end之后,否则会执行不到res.end();
        };
        res.setHeader("Last-Modified",lastModified);
        res.setHeader("Content-Type",mimeType);
        // res.setHeader("Cache-Control","max-age=10")   // 单位是秒  60*60*24*365 即一年,
                                // 缓存之后,没有网也能用,必须情况浏览器缓存才能重新获取.
        res.end(data);
      })
    }

    }
    // var mimeType = getMimeType(extname);
    // var realPath =
}
function getMimeType(extname){
  // fs.readFile(__dirname+"/conf/mime_type.json",(err,data)=>{
  //   if(err) console.log(err);
  //   var str = JSON.parse(data);
  //   var type = str[extname]?str[extname]:'text/plain';
  //   return type;
  // })
  var mimeJson = fs.readFileSync(__dirname+"/conf/mime_type.json");
  var mimeObj = JSON.parse(mimeJson);
  return mimeObj[extname]?mimeObj[extname]:'text/plain';
}

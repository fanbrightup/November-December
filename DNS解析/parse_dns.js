var qs = require("querystring");
var dns = require("dns");
exports.parseDns = function(res,req){
  var postData = '';
  req.on("data",(postDataChunk)=>{
    postData += postDataChunk;
  });

  req.on("end",()=>{   // 这多加了调试时忘记删除的参数
    var retData = getDns(postData,(domain,addresses)=>{
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end('<html><pre>Domain:'+domain+'\
          IP:</pre> </html>')
    });
    return;
  });

  function getDns(postData,callback){
    var domain = qs.parse(postData).search_dns;

    dns.resolve(domain,(err,addresses)=>{
      if(!addresses){
        addresses = ['不存在域名'];
      }
      callback(domain,addresses);
    })
  }
}

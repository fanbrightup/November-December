var fs = require("fs");
var url = require("url");
exports.goIndex = function(res,req){
  var readPath = __dirname+"/index.html";
  fs.readFile(readPath,(err,data)=>{
    res.end(data);
  });
}

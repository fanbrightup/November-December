var formidable = require("formidable");
var http = require("http");
var url = require("url");
var fs = require("fs");
var util = require("util");
var pug = require("pug");
http.createServer((req,res)=>{
  res.render = function(template,options){
    var str = require("fs").readFileSync(template,'utf8');
    var fn = pug.compile(str,{filename:template,pretty:true});
    var page = fn(options);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(page);
  }


  var pathname = decodeURI(url.parse(req.url).pathname);
  if("/" == pathname){
      res.render('demo10_index.pug',{"user":"okfcm"});

}else if("/upload" == pathname && req.method.toLowerCase() == "post"){
  var form = new formidable.IncomingForm();
  // form.uploadDir = "/home/try/share";
  form.parse(req,(err,fields,files)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    // res.write(util.inspect({fields:fields,files:files}));
    console.log(files.uploadfile.name);
    // 为文件改写路径,并将其原来的名字作为新的路径下的名字
    var newPath = __dirname+"/"+files.uploadfile.name;
    fs.renameSync(files.uploadfile.path,newPath);
    var info ={
      name:files.uploadfile.name,
      path:newPath
    }
    res.render("demo10_上传成功.pug",{"message":info})

  })
  // return ;
}else{
  res.end("page not found");
}
}).listen(3000);










/*  找路径为files.uploadfile.path  与那个File没有关系,File在冒号右边,根本用不到.
{ fields: { name: '11' },
  files:
   { uploadfile:
      File {
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        size: 7033190,
        path: '/home/try/share/upload_7464ebe1be9a9357c263cfbac2803b30',
        name: '20150422 OpenWrt&GUI-SS for HC6361 tftpd.rar',
        type: 'application/x-rar',
        hash: null,
        lastModifiedDate: 2016-12-12T11:46:39.226Z,
        _writeStream: [Object] } } }上传完成
*/

var http = require('http');
var formidable = require("formidable");
var server = http.createServer(function(req, res){
    switch (req.method) {
      case 'GET':
        show(req,res);
        break;
      case 'POST':
        upload(req,res);
        break;
    }
  });

server.listen(3000);
function show(req,res){
  var html = ''
            +'<form method="post" action="/" enctype="multipart/form-data">'
            +'<p><input type="text" name="name" /></p>'
            +'<p><input type="file" name="file" /></p>'
            +'<p><input type="submit" value="Upload" /></p>'
            +'</form></body></html>';
    res.setHeader("Content-Type","text/html");
    res.setHeader("Content-Length",Buffer.byteLength(html));
    res.end(html);
}
function upload(req,res){
  if(!isFormData(req)){
    res.statusCode = 400;
    res.end("Bad Request:expecting multipart/form-data");
    return ;
  }
  var form = new formidable.IncomingForm();
  // field 监视的是文本域输入框的接收情况
  form.on("field",(field,value)=>{
    console.log("field is "+field);
    console.log("value is "+ value);
  });
  // 发生file事件当文件接收完成
  form.on("file",(name,file)=>{
    console.log("name is " + name);
    console.log("file is " + file);
  });
  form.on("end",()=>{
    res.end("upload complete");
  })
  //  chrome 自己就会计算上传的比例,firefox没有
  form.on("progress",(rev,exp)=>{
    var percent = Math.floor(rev/exp*100);
    console.log(percent);
  })
  form.on("error",()=>{
    res.end("something error");
  })
  form.parse(req);
}

function isFormData(req){
  var type = req.headers['content-type'] || '';
  return 0 == type.indexOf('multipart/form-data');
}

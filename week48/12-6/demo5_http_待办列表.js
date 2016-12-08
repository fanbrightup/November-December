var http = require('http');
var items = [];

var server = http.createServer(function(req, res){
  if ('/list' == req.url) {
    switch (req.method) {
      case 'GET':
        show(res);
        break;
      case 'POST':
        add(req, res);
        break;
      default:
        badRequest(res);
    }
  } else {
    notFound(res);
  }
});

server.listen(3000);
function show(res){
  var html = '<html><head><title>Todo list </title></head><body>'
            +'<h1>Todo list </h1>'
            +'<ol>'
            +items.map((item)=>{
              return '<li>' + item +'</li>'
            }).join('')
            +'</ol>'
            +'<form method="post" action="/list">'
            +'<p><input type="text" name="item" /></p>'
            +'<p><input type="submit" value="Add Item" /></p>'
            +'</form></body></html>';
    res.setHeader("Content-Type","text/html");
    res.setHeader("Content-Length",Buffer.byteLength(html));
    res.end(html);

}

// add 函数
var qs = require('querystring');
function add(req,res){
  var body = '';
  req.setEncoding('utf8');
  req.on('data',(chunk)=>{
    body += chunk
  });
  req.on('end',()=>{
    var obj = qs.parse(body);
    items.push(obj.item);
    show(res);
  })
}
// notFound函数
function notFound(res){
  res.end("not found");
}
function badRequest(res){
  res.end("bad request");
}

var fs = require("fs");
var path = require("path");
var name = 'a';
var dirpath = '/home/try/Desktop/November-December/week51/http文件下载/';
exports.deal = function(name,res){
  var url = dirpath + name;
  if('.' === name[0]){
    // console.log('隐藏文件');
    // return ;
    res.end('隐藏文件')
  }
  if(path.extname(name)!==''){
    readFile(url);
  }else{
    if(isDir(url)){
     readDir(url);
   }else{
     readFile(url);
   }
  }
}
function isDir(url){
  return fs.statSync(url).isDirectory();
}
function readFile(url){
  fs.readFile(url,(err,data)=>{
    if(err) throw err;
    // console.log(data.toString());
  })
}
function readDir(url){
  fs.readdir(url,(err,data)=>{
    // console.log(data);
  })
}

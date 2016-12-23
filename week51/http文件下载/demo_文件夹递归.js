var fs = require("fs");
var path = require("path");
// fs.stat('a',(err,data)=>{
//   console.log(data.isDirectory())
// })
var name = 'a';
var dirpath = '/home/try/Desktop/November-December/week51/http文件下载/';
function fn(name){
  var url = dirpath + name;
  if('.' === name[0]){
    console.log('隐藏文件');
    return ;
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
  // fs.stat(url,(err,data)=>{
  //   if(err) throw err;  // 这样写会出现异步的错误
  //   return data.isDirectory(); // 这里ruturn 不对,不按预期走
  // })
  return fs.statSync(url).isDirectory();
}
function readFile(url){
  fs.readFile(url,(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
  })
}
function readDir(url){
  fs.readdir(url,(err,data)=>{
    console.log(data);
  })
}
fn('a')
fn('a/b')

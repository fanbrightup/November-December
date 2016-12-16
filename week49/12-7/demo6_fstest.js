// 不能直接写出文件名,会找不到文件所在位置,process.cwd()为week48,只有__dirname能反应出真实路径
var fs = require('fs')
fs.readFile(__dirname+"/test.txt",'utf8',(err,data)=>{
  console.log(data)
  fs.unlink(__dirname+"/test.txt");  // 删除文件
});
// console.log(__dirname);
// console.log(process.cwd());
// 在命令行下有12-7路径,但是使用atom自己的脚本执行少了最后一个文件夹名.node demo6  执行正常

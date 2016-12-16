var fs = require("fs");
fs.readdir("../12-8",(err,files)=>{
  if(err) throw err;
  files.forEach((item,i)=>{
    console.log(`第${i+1}个是${item}`);
  })
})
// fs.rmdir("./tt",(err)=>{
//   if(err) throw err;
// })
// 0755是八进制,不是10进制  0不能少,少了的话解析不正确
console.log(process.cwd());
process.chdir("../12-8");  // 改变当前执行目录是有process来负责的,不是fs模块
console.log(process.cwd());
// fs.mkdir("hh",0777,(err)=>{
//   if(err) console.log(err);
// })
// fs.mkdir("tt0755",0755,(err)=>{
//   if(err) console.log(err);
// })
fs.chmod("hh",0777,(err)=>{

})

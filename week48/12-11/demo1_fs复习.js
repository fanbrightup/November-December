var fs =require("fs");
var buf = new Buffer("hello world");
fs.writeFile("./test",buf,(err)=>{

})
// fs.unlink("./test")
console.log(process.cwd())
fs.chmod("test",0777)    // 可以使0777或"777" 不是十进制就行
fs.rename("test","testnew")
fs.stat("tt",(err,stats)=>{
  console.log(stats);
})
fs.exists("testnew",(boolExists)=>{
  console.log(boolExists);
})

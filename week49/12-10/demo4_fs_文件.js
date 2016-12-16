var fs = require("fs");
fs.readFile("test.",(err,data)=>{
  var strArr = data.toString().split(/\n/);
  console.log(strArr);
})
console.log(fs.readFileSync("test.").toString())
var buf = new Buffer("新的添加\n");
fs.writeFile("test.",buf,(err)=>{

})
fs.appendFile("test.",buf,(err)=>{
    // appendFile添加文件
})
fs.createReadStream("test.").pipe(fs.createWriteStream("testcopy"));
fs.rename("testcopy","testnew",(err)=>{
})
fs.unlink("ttt");

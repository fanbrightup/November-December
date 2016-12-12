var fs = require("fs");
fs.readdir(".",(err,files)=>{
  console.log(files);
})
// 只读取一层深度,

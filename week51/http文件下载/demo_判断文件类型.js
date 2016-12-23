const fs = require("fs");
// fs.readdir(".",(err,data)=>{
//   console.log(data);
// })
console.log(fs.statSync('static').isDirectory());
console.log(fs.statSync('static').isFile());

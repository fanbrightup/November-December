var fs = require("fs");
var readStream = fs.createReadStream("./index.html");
readStream.on("open",(fd)=>{
  console.log("已打开");
  console.log(fd);
})
readStream.on("data",(chunk)=>{
  console.log(chunk.toString());
})

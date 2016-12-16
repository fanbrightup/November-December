var fs = require("fs");
var writeStream = fs.createWriteStream("./myFile.txt");
var readStream = fs.createReadStream("/etc/passwd");
// readStream.on("data",(chunk)=>{
//   writeStream.write(chunk);
// }
readStream.pipe(writeStream);

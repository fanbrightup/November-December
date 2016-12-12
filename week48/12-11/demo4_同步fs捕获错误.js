var fs = require("fs");
try{
  fs.unlinkSync("./temp");  // 对于同步的函数文件类型等容易产生错误的地方要使用try catch来进行错误的捕获,提高服务器的健壮性
}catch(e){
  console.log("dd")
}

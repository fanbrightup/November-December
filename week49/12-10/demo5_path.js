var path = require("path");
var fs = require("fs");
console.log(
  fs.existsSync("test.")   // 同步版本,返回布尔值
)
fs.exists("test.",(status)=>{    // 异步版本,返回布尔值,是否存在
  console.log(status);
});
console.log(
  path.dirname("/sd/d.js")  //   /sd    目录名
)
console.log(
  path.basename("/sd/sdf.js",".js")  // sdb.js   文件名
)
console.log(
  path.extname("s/sd/sdf.js")  //    .js  扩展名
);

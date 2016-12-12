var fs = require("fs");
fs.watchFile("test.",(now,old)=>{
  console.log("现在的大小为:"+now.size);
  console.log("原来的大小为:"+old.size);

})

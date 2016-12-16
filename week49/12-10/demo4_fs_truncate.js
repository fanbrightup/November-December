var fs = require("fs");
fs.truncate("test.",40,(err)=>{
  if(err)   { console.log(err); }
    });
// 截取文本,12个字节,多的就抛弃了,最后剩12个字节,不够的时候会在后边补空格
fs.stat("test.",(err,stats)=>{
  console.log(stats);
})

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input:fs.createReadStream('demo5_范例.js')
});
rl.on("line",(line)=>{
  if(Buffer.byteLength(line) == 0){    // 要将空白的行不显示,只需条件 !line  即可, 匹配\n和空格都不行,
                //  也可以使用if(0 == line.length) 来进行空行的匹配  或者Buffer.byteLength(line) == 0;
    // console.log('换行')
    return ;
  }
  console.log(`line from file:${line}`)
})

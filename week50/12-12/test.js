var fs = require("fs");
(async function(){
await fs.writeFile("./c","hh");


await fs.readFile("./c",(err,data)=>{
  console.log("内容为"+data);
})
await fs.writeFile("./c","another");
})();

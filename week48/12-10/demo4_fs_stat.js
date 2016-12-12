var fs = require("fs");
fs.stat("test.",(err,stats)=>{
  if(err) { console.log(err); return; }
  console.log(stats);   
})

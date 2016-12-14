var readline = require("readline");
var fs = require("fs");
var rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
rl.setPrompt("fan:")
// rl.question("请输入想要查看的文件名:",(filename)=>{
//   fs.readFile(filename,(err,data)=>{
//     rl.write(data);
//   })
// })
rl.prompt();
rl.on("line",(cmd)=>{
  console.log(`您敲入了: ${cmd}`)
})
rl.on("close",()=>{
  // console.log("bye");
  rl.write("bye");
  process.exit(0);
})

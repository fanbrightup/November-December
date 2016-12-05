const cp = require("child_process");
var n = cp.fork(__dirname+"/sub.js");
n.on("message",(msg)=>{
  console.log("父进程 收到"+msg);
});
n.send("from father");
// 父进程和子进程同时执行,先后顺序不定

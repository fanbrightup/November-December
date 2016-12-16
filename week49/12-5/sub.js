process.on("message",(m)=>{
  console.log("子进程收到 "+m);
});
process.send("from son")

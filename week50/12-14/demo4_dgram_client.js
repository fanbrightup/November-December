var dgram = require("dgram");
var client = dgram.createSocket("udp4");
var message = new Buffer("测试");
client.send(message,0,Buffer.byteLength(message),4444,'localhost',(err,bytes)=>{
  if(err){throw err};
  console.log(bytes);
});
client.on("message",(msg)=>{
  console.log("收到了UDP服务器消息:",msg.toString());
})

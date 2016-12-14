var dgram = require("dgram");
var client = dgram.createSocket('udp4',(msg)=>{
  console.log("从服务器:"+msg.toString());
});
var str = "你好,服务器";
client.send(str,0,Buffer.byteLength(str),4000,'0.0.0.0',(err,bytes)=>{
  console.log(bytes);
});
client.on("message",(msg,rinfo)=>{
  console.log(msg.toString());
  console.log("服务端信息");
  console.log(rinfo);
})

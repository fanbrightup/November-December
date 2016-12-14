const dgram = require("dgram");
const server = dgram.createSocket("udp4");

server.on("error",(err)=>{
  console.log(err);
  server.close();
})
server.on("message",(msg,rinfo)=>{
  console.log(`server got:${msg} from ${rinfo.address}:${rinfo.port}`);
  // console.log(rinfo);
  server.send('收到了:'+msg,0,Buffer.byteLength(msg)+10,rinfo.port,rinfo.address);
  //  这里要注意长度为总的字节的长度.所以要计算全部,不能直接使用msg.length来,length只统计字符个数,而不是具体的字节数
});
server.on("listening",()=>{
  var address = server.address();
  console.log(address);
  console.log(`server listening ${address.address}:${address.port}`);
})
server.bind(4444);

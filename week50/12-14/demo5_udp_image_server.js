var dgram = require("dgram");
var server = dgram.createSocket('udp4');
server.on("error",(err)=>{
  console.log(`server error:\n${err.stack}`);
  server.close();
});
server.on("message",(msg,rinfo)=>{

});
server.on("listening",()=>{
  var address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});
server.bind(4000);

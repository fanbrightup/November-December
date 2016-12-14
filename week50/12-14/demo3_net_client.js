var net = require("net");
const client = net.connect({port:35215},()=>{
  console.log('connected to server');
  client.write('world!\r\n');
});
client.on("data",(data)=>{
  console.log("从服务器传来:"+data.toString());
  client.end();
})
client.on("end",()=>{
  console.log("disconnected from server");
})

var dgram = require("dgram");
var server = dgram.createSocket('udp4',(msg,rinfo)=>{
  console.log("收到了信息"+msg.toString());
  console.log("客户端信息");
  console.log(rinfo);
  var str = "收到了来自客户端的问候";
  server.send(str,0,Buffer.byteLength(str),rinfo.port,rinfo.address);
});
server.on("listening",()=>{
  var address = server.address();
  console.log(`服务器运行于${address.address}:${address.port}`);
})
server.bind({address:"fan",port:4000},()=>{
  console.log("bind触发");
}); // 0.0.0.0:4000
  // 当没有端口时,端口随机分配.当没有地址时,地址为0.0.0.0 好像同localhost用起来没什么区别,未深入研究? 答案在下方
  // 所有接口地址ipv4   0.0.0.0   ipv6   ::0    即会监听所有地址,所以server.address()返回的信息为localhost

// bind(port,address)  端口在前,顺序不能乱
// bind({address:'fan',port:4000})  通过传一个options对象,可以避免参数顺序不对的情况发生


//  bind后会出发listening事件,并执行bind内的回调函数,所以bind内的回调和监听listen事件选一即可,
// 如果都有的话都会触发,同时的

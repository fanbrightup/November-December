var http = require("http");
var opts = {
  host:"fan",
  port:3000,
  path:'/',
  method:"GET"
};
var req = http.request(opts,(res)=>{
  console.log(res);
  res.setEncoding('utf8');// 可以使用res.setEncoding()来设置编码,或者data.toString()也可
  res.on("data",(data)=>{
    console.log(data);
})
});
req.end();  //req.end()不能少,没有end就不会真正的执行这次操作

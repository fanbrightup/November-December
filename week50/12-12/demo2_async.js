var fs = require("fs");
// 同步版本
// function fn(){
//   fs.readFile("./test.txt",(err,data)=>{
//     console.log("first"+data);
//   });
//
//   fs.appendFile("./test.txt","新添加的");
//   fs.readFile("./test.txt",(err,data)=>{
//     console.log("second"+data);
//   });
// }
// fn();

//  异步版本
var s = async function  (){
  await fs.readFile("./test.txt",(err,data)=>{
    console.log("first"+data);
  });

  await fs.appendFile("./test.txt","新添加的");
  await fs.readFile("./test.txt",(err,data)=>{
    console.log("second"+data);
  });
}
s();

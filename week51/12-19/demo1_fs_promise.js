var fs = require("fs");
// 异步版本,两个交替完成
// fs.readFile("./a.txt",(err,data)=>{
//   if(err) throw err;
//   console.log(data.toString());
// });
// fs.readFile("./b.txt",(err,data)=>{
//   if(err) throw err;
//   console.log(data.toString());
// });
// ======================================================
// promise版本
function readFilePro(path){
  return new Promise((resolve,reject)=>{
    fs.readFile(path,(err,data)=>{
      if(err){
        reject(path+" something error") ;
      }else{
      console.log(data.toString());
      resolve("成功")
    }
    })
  }
  )
}
readFilePro('./a.txt')
  .then((data)=>{console.log(data);return readFilePro('./bs.txt')})
  .then((result)=>{console.log(result);})
  .catch((err)=>{
  console.log(err);
});

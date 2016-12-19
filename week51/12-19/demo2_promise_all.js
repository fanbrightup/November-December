var fs = require("fs");
function readFilePro(path){
  return new Promise((resolve,reject)=>{
    fs.readFile(path,(err,data)=>{
      if(err){
        reject(path+" something error") ;
      }else{
      // console.log(data.toString());
      resolve(path+" 成功")
    }
    })
  }
  )
}
// 要让promise对象的执行发生在Promise.all或Promise.race里面,而且传的是promise.resolve()成功的对象
// Promise.all([readFilePro('./a'),readFilePro('./b')])
//        .then((result)=>{  console.log(result); })
//        .catch((err)=>{console.log(err);})
// Promise.race([readFilePro('./a'),readFilePro('./b')])
//        .then((result)=>{  console.log(result); })
//        .catch((err)=>{console.log(err);})
var p2 = Promise.resolve(readFilePro('./b'));
var p1 = Promise.resolve(readFilePro('./a'));
Promise.race([p2,p1]).then((res)=>{console.log(res);return Promise.resolve("一月又一月")}).then((res)=>{
  console.log(res);
})

// Promise.resolve()是一个静态方法Promise.resolve(value)
// 可以认为是 new Promise()方法的快捷方式，这方法可以将thenable对象转换为Promise对象


// 在链方法处理过程中，任意一个then出现错误，都要结束其后的then方法，并将错误回调至最后的catch方法中。


// 因为Promise.all([])中的参数都是由Promise.resolve()包装过的,所以,Promise.all()可以处理不同类型的promise对象

// async function fasync(){

// }
function test(){

  return new Promise((resolve,reject)=>{
    var time = Math.ceil(Math.random()*2)
    if(1 == time){
      resolve('==1');
   }else{
     reject('==2')
   }
})
}
async function fasync(){
  await test();
}
fasync()
  .then((s)=>{
    console.log(s)
  })
  .catch((s)=>{
    console.log("err")
    console.log(s);
  })

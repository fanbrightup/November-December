// 这个函数会略过setTimeout先去打印foot
function f(){
  setTimeout(console.log,2000,'等待了2000s');
  // console.log('foot');
}
// f();
//   使用async/await来解决
async function fasync(){
  console.log('开始');
  // 直接在await后写一个简单的函数没有效果,await后要跟一个promise对象
  // await setTimeout(console.log,2000,'等待了2000s----async');
  await sleep(2000);
  console.log('foot');
}
function sleep(num){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`等待了${num/1000}秒`);
      resolve(); },num)
  })
}
fasync();

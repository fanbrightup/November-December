var fs = require("fs");
function sleep(time){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`睡眠${time}秒`);
      resolve();},time);

  })
}
(async ()=>{
  await sleep(2000);
  await  sleep(3000);
  await sleep(4000);
})()

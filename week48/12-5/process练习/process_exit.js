for(let i = 0;i<9999;i++){
  if(i == 500){
    process.exit;  // 没有括号
  }
}
process.on("exit",()=>{
  console.log("退出")
})
// process.on('exit', function () {
// process.nextTick(function () {
// console.log('This will not run');
// });
// console.log('About to exit.');
// });

var readline = require("readline");
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
rl.setPrompt("size:");
rl.question('请输入需要的size:\n',(size)=>{
  show(size);
  rl.prompt();
  rl.on('line',(line)=>{
    if('quit' === line) rl.close();
    show(line);
    rl.prompt();
  }

)
})
function show(size){
size = Number(size) || 8;
var arr = new Array(size*size);
// BUG: 这里有个问题,问什么new Array(64) 产生的数组,不能使用map,只有非undefined的值才会发生变化
// arr =  arr.map(()=>{
//   var v = Math.floor(Math.random()*2);
//   console.log(v);
//   // return  v?'#':' ';
//   return -1;
// })
for(let i = 0;i<arr.length;i++){
  var v = Math.floor(Math.random()*2);
  arr[i] = v?'#':' ';
}
arr.forEach((ele,i)=>{
  if(i%size == 0){
    process.stdout.write('\n');
  }
  process.stdout.write(ele+' ');
})
console.log('\n请输入需要的size>>>>>输入quit即可退出 :');
}

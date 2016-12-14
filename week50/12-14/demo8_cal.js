var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question("请输入要比大小的两个值:以空格分隔  ",(answer)=>{
  var v1 = answer.split(' ')[0];
  var v2 = answer.split(' ')[1];
  var str = v1 + (v1>v2?' 大于 ':' 小于 ') + v2;  // 要加括号
  rl.write(str);
  rl.close();
})

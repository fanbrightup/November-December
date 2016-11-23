// 每天都吃当前桃子的一半且再多吃一个，到了第十天就只剩下一个桃子，求出原来有多少桃子？
// 反向
process.stdin.setEncoding("utf8");
process.stdin.on("readable",()=>{
  var chunk = process.stdin.read();
  var num = parseInt(chunk);

  if(chunk==null){

  }else if(Number.isInteger(num)){

  var total = 1;
  for(let i= 1;i<num;i++){
    total = (total+1)*2;
  }
console.log("第"+num+"天,还剩一个，则总数为：")
console.log(total);
console.log("====================================输入q退出");
}else if("q\n" == chunk){
  process.exit(0);
}else{
  console.log("输入错误，请重新输入");
}
})

// 正向
// for(let num = 512;num>0;num++){
//     let v = num;
//     for(let i = 1;i<10;i++){
//       v = v/2 -1;
//       // console.log(v);
//     }
//     if(1 == v){
//       console.log(num);
//       return ;
//     }
// }

var start = 1;
var end = 10;
// 实现了一个数组,及控制间隔
function range(one,two,step = 1){
  var arr= [];
  start = Math.min(one,two);
  end = Math.max(one,two);
  var flag = step>=0;
  step = step>=0?step:-step;
  for(let i = start;i<=end;i+=step){
    arr.push(i);
  }
  return flag?arr:arr.reverse();
}
function sum(arr){
  return  arr.reduce((a,b)=>{
        return a+b;
      });
}
// console.log(range(1,10,-2),
//   sum(range(1,10,2))
// );
console.log(
  range(30,20,2)
);

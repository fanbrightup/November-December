function sum(a,b,c,d){
  var total = 0;
  // 这里将forEach所需的回调函数加上逗号,放在arguments后边
  [].forEach.call(arguments,(ele)=>{
    total += ele;
  })
  console.log(total);
}
sum(1,2,3,4)

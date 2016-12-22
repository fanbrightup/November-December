// 将函数作为参数来进行传递
function show(a,b){
  console.log(`两个参数${a}__${b}`);
}
// 这不就是call的原理吗
function callIt(fn,first,second){
  fn(first,second);
}
callIt(show,1,2)

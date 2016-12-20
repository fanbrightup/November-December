function isEven(num){
  if(1 === num) return false;
  else if(0 === num) return true;
  else  return arguments.callee(num - 2);
  // 最后要把return加上
}
// 当使用isEven函数名进行递归时极限数字是35921,再高会发生栈溢出,
// 当使用arguments.callee来进行递归时,极限数字是31431
console.log(isEven(31431));

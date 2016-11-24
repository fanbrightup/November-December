var countNum = function(){
  var count = 0;
  return function (){
      var a = 2;
      return ++count;
  }
}();// 立即执行了
console.log(countNum());
console.log(countNum());
console.log(countNum());
// 这个count是无法被取到的，它所在的函数已经执行过了，除了执行这个返回的函数，其他没有别的方法
// 去修改这个count的值。


//  xx 属于fn函数内部的变量，函数不执行，xx就不存在，当执行完后xx也消失了。造成了xx不能
//  被外界触及的问题。
// console.log(countNum.a);
// function fn(){
//   var xx = 2;
// }
// console.log(fn().xx)

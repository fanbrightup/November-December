(function f(){
  'use strict'
  let s = 1;
  var str = "let s = 2;console.log(s)";
  eval(str); //  eval有自己独立的作用域
  console.log(s);
}());  // ()可以放里边也可放外边,立即执行函数后一定要加分号,否则报错
(function f(){
  s = 'Global';
  var i = "inner";
})()
// console.log(s);  // 全局变量s可访问,但是一定是在立即执行函数执行后才能访问.所有函数内定义的全局变量都要等函数执行后才会生效
// console.log(i);  // 内部变量访问不到
function f(){
  a = 'a global';
}
f()
console.log(a);

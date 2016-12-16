function fn() {
  return 1;
}
// 自己写的函数,一般可通过toString()得到源代码
// console.log(fn.toString());
// 语言内部的实现,可能底层是c或c++实现的,所以不能使用toString()得到原来的函数代码,
// 使用toString()并不能真正准确的得到函数的源代码,所以不能相信这个方法
// console.log(Array.prototype.slice.toString());
function fnb(){
  return;
}
function fnc(){

}
// console.log(fn());
// console.log(fnb());
// console.log(fnc());  // 函数默认都有返回值为undefined,即使没有return

function fnd(addr,port){
  addr = addr || 'localhost';  // 使用|| 来对参数进行验证,并执行一些赋值
  port = port == undefined?'22':port;
  console.log(addr);
  console.log(port);
}
// fnd(0,0)

function fnf(addr=1,port=22){   //  使用es6的函数参数默认赋值
  console.log(addr);            //  可以只针对undefined,进行默认赋值,将null和 0等情况放开,避免0和null不能赋值
  console.log(port);
}
// fnf(null,0);

function fnd(addr,port){
  // if(typeof addr === 'object'){  // typeof 得到的是小写的字符串object,
  if(addr instanceof Object){   //  instanceof是对应首字母大写的Object对象
    var a = addr.addr;
    var b = addr.port;
  console.log(a);
  console.log(b);
  return ;
}              //  函数实现了,可以接收一个对象参数options,或者结束零散的参数 
  console.log(addr);
  console.log(port);
}
fnd({addr:'localhost',port:22})
fnd('lo',222)

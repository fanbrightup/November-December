//  这里解决了一个很久的疑惑,传参时并没有传向show里传参数,它怎么执行,(如果加了(参数),show会立即执行),就不对了
//  是以前有个误区,我以为程序会将上下文移到show这个回调函数中,但是事实是
//  show是作为回调被嵌入到f这个函数中去了,所以由f函数来为他加参数,这是同步回调,
//  所以回调函数只需要传一个函数名即可或者写出完整的函数定义function show(a){code};

function f(num,show){
  var a = num * 10;
  show(a);
}
function show(a){
  console.log(a);
}
f(5,show);


function z(num,str){
  var a = num * (-10)
  eval(str);            //  eval执行的代码,编译器不能提前获取,所以不能优化,如果传的是函数的话就可以优化了
}
var str = "console.log(a)"; // 可以通过使用eval(str)的方式来执行一条语句,代替回调函数
z(10,str);

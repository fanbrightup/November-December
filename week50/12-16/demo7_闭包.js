function makeSandwich(magic){
  // var magic = "peanut butter";
  function make(filling){
    return magic + " and " + filling;
  }
  return make;
}
var a = makeSandwich("one")
var b = makeSandwich("b");
console.log(
  a("a1"),'\n',
  b("b2")
);
// console.log(a("a2"));
// 通过对闭包的使用,在执行第一个函数makeSandwich(magic)时传入了第一个,并通过闭包在make函数中
// 引用了magic,使得make函数可以保留对magic的引用,而不是复制了magic,a和b各有各的magic在makeSandwich执行后就
// 确定了.每次makeSandwich执行后都是留一份magic,别的函数都是对它的引用,

// ======================================
// 闭包可以更新外部变量的值
  function outer(){
    var age ;
    return {
      getAge:function(){return age},
      setAge:function(num = 0){age = num},
      type:function(){return typeof age}
    }
  }
  var fan = outer();
  fan.setAge(20)
  fan.setAge();
  console.log(fan.getAge());
  console.log(fan.type());
// 通过返回一个对象来对age这个函数执行过程中产生的变量的引用,是age保留了下来,并且fan中是对age的引用,
// 所以会保护age只能被设定好的方法所修改和访问



// ==================
// 使用闭包也可以用于信息验证,只对外暴露一个哈希值验证的算法,不提供修改和获取的方法,从而实现简单的验证操作

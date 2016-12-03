var ninja = {
  chirp:function(n){
    return n>1?this.chirp(n-1) + "-chirp":"chirp";
  }
}
console.log(ninja.chirp(3));
var samurai = {chirp:ninja.chirp};  // 为什么是传的值,而不是传的引用?
    //  想明白了,因为ninja是个对象,chirp指向一个匿名函数对象,现在samurai的chirp也指向了那个匿名函数对象
    // ninja是被清空了,但是chirp所指向的那个函数对象依然存活着.所以可以继续使用.
// ninja = {};
console.log(typeof(samurai.chirp));

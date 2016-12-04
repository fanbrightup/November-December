var ninja ={
  chirp:function(n){
    return n>1?arguments.callee(n-1)+"-chirp":"chirp";
  }
}
console.log(
  ninja.chirp(3)
)

function addx(x){
  return function addy(y){
    return x+y;
  }
}
var fn2 = addx(2);
var fn5 = addx(5);
console.log(fn2(5));
console.log(fn5(5));

function say(){
  (function inner(){
    one = 1;
  })()
}
say();
// var two = 2;
two = 2;
console.log(global.one);
console.log(global.two);

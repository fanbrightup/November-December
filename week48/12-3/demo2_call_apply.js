function add(){
  var result = 0 ;
  for(let i = 0;i<arguments.length;i++){
    result += arguments[i];
  }
  this.result = result;
}
var one = {};
var two = {};
add.apply(one,[1,2,3,4,5]);
add.call(two,1,2,3,4,5);
console.log(one);
console.log(two);
// console.log(add().result);
var three = new add(1,2,3,4,5);
console.log(three.result);

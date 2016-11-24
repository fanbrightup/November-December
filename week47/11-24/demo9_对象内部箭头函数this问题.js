var a = 1;
var b = 2;
function sayA(){
  console.log(a);
}
// sayA()
var obj = {
  a:3,
  b:4,
  sayA:function(){
    // return obj.a;
    return this.a;
    // return this.a  当使用箭头函数时是错的，没有函数作用域，不会有this出现。
    // 将箭头函数改为function即可出现this。箭头函数的this很特殊，有一些不同。
  }
};
console.log(obj.sayA());

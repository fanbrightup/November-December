function sum(arr){
  var total = 0;
  // arr.forEach((ele)=>{
  //   total += ele;
  // })
  // every的用法是对每一个元素进行一次判断,使用return返回每个值,全都符合条件,则最终返回true.
  // 是用于判断的方法
  var s = arr.every((ele)=>{
   return   ele > 0
  })
  return s;
}
var arr = [1,2,3,4];
console.log(sum(arr));

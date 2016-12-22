var arr = [1,2,3];
// 不修改原来的数组
function append(arr,item){
  var arrNew = [].concat(arr);  // 使用concat来获取内容而不是简单的赋值,因为传的是引用,所以必须要小心
  arrNew[arrNew.length] = item;
  return arrNew;
}
console.log(
  append(arr,4)
);
console.log(arr);

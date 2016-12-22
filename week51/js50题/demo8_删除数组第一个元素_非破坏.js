var arr = [1,2,3];
function removeFirst(arr){
  // 使用slice来截取
  var arrNew = [].concat(arr).slice(1);
  // arrNew.shift();
  return arrNew;
}
console.log(arr);
console.log(removeFirst(arr));
console.log(arr.slice());

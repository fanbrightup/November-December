var arr = [1,2,3];
function truncate(arr){
  var arrNew = [].concat(arr);
  // arrNew.length = arrNew.length -1;
 arrNew.pop() ;
  return arrNew;
}

console.log(arr);
console.log(truncate(arr));

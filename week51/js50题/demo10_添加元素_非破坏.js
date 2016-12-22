var arr = [1,2,3];
function addIndex(arr,index,item){
  var arr2 = [].concat(arr);
  arr2.length = index+1;
  arr2[arr2.length - 1] = item;
  for(let i = index;i<arr.length;i++){
    arr2.push(arr[i])
  }
  return arr2;
}
console.log(addIndex(arr,0,'a'));
console.log(arr);

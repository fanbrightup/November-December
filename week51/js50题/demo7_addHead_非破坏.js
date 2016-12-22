var arr = [1,2,3];
function addHead(arr,item){
  return [item].concat(arr);
}
console.log(addHead(arr,0));
console.log(arr);

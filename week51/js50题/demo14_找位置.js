var arr = [1,2,3,23,3,4,3];
function find(arr,char){
  var index = [];
  arr.forEach((ele,i)=>{
    if(char === ele) index.push(i);
  })

  return index.length == 0?-1:index;
}
console.log(find(arr,3));
//  找到第一个
function find2(arr,char){
  for(let i = 0;i<arr.length;i++){
    if(char === arr[i])
      return i;
  }
  return -1;
}
console.log(find2(arr,-1));

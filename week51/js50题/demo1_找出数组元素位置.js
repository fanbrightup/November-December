function indexOf(arr,item){
  var index = -1;
  arr.forEach((ele,i)=>{
    if(item === ele) index = i;
  })
  return index;
}
var arr = [1,2,3,4,5];
console.log(

indexOf(arr,3)
);

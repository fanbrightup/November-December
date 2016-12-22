var arr = [1,2,3,3,1];
function count(arr,item){
  var count = 0;
  arr.forEach((ele)=>{
    // forEach中没有continue
    if(ele === item)
    // count ++;
  })
  return count;
}
console.log(count(arr,2));

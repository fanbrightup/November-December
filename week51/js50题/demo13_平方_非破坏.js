var arr = [1,2,3];
function square(arr){
  return arr.map((ele)=>{
    return ele*ele;
  })
}
console.log(square(arr));
console.log(arr);

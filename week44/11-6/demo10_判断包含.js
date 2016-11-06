// forEach中的return 不能终止forEach循环
console.log(

  mutation(["helloSH", "hs"])
)

function mutation(arr) {
  arr = arr.map((val)=>{ return val.toLowerCase()});
  var flag = true;
    arr[1].split('').forEach((val)=>{
      if(arr[0].indexOf(val)<0)     flag = false;
    })
  return flag;
}

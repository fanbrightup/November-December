var arr = [1,2,3];
function makeArrFun(num){
  // BUG: 这里我又一次犯了错误,再square(num)内加了num这个参数,这会让里边的取不到最外层闭包产生
  // 的那个num值
  return function square(){
    return num*num;
  }
}
var arrFun = []
for(let i = 0;i<arr.length;i++){
  arrFun[i] =makeArrFun(arr[i]);
}
console.log(arrFun[0]());
console.log(arrFun[1]());
console.log(arrFun[2]());

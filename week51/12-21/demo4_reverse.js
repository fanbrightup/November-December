var arr = [1,2,3,4,5]


// 不破话原数组
function reverseArray(arr){
  var newArr = [];
  var length = arr.length;
  arr.forEach((ele,i)=>{
    newArr[length-1-i] = ele;
  })
  return newArr;
}

console.log(
  // reverseArray(arr)
);
// 会直接在数组上修改,破坏性方法
function reverseArrayInPlace(arr){
  var newArr = [];
  var length = arr.length;
  for(let i = 0;i<length;i++){
    newArr[i] = arr.pop();
  }
  newArr.forEach((ele)=>{
    arr.push(ele);
  })
// BUG: 这里我出现了失误,我将arr = newArr,这样导致arr的指向发生了错误,原来的数组保持不变.
// 正确的做法是始终保留arr对原数组的引用,这样才能起到再函数内修改全局的arr变量
}
  reverseArrayInPlace(arr);
console.log(arr);

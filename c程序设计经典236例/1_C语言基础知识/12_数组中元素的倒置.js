var arr = [1,2,3,4,5];
// console.log(arr.reverse())  注意reverse是破坏性方法,会修改原数组内容.
var rev_arr = [arr.length] ;
// for(let i = 0,j = 4;i<arr.length;i++,j--){
//   rev_arr[j] = arr[i];
// }
var j = 0;
while(arr.length){
  rev_arr[j++] = arr.pop();
}
console.log(rev_arr)
// []数组为空也为真,要通过判断是否长度为0来进行
arr = rev_arr;
console.log(arr)

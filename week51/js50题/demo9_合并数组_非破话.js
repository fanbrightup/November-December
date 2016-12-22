var arr1 = [1,2,3];
var arr2 = [4,5,6];
function concat(arr1,arr2){
 var arrNew = [];
 arr1.forEach((ele)=>{
   arrNew.push(ele);
 })
 arr2.forEach((ele)=>{
   arrNew.push(ele);
 })
 return arrNew;
}
console.log(concat(arr1,arr2));
console.log(arr1,arr2);

// myArr.length是3,即第二维的数量
var  myArr = [
  [9,8,7,6],
  [5,4,3,2],
  [10,11,12,13]
];
var oneArr = myArr.toString().split(',').sort((a,b)=>{
  return a-b;
});
console.log(oneArr[0])
console.log(oneArr[oneArr.length-1])

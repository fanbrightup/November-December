// 对一个3x4的二维数组进行最大值和最小值的查找
var  myArr = [          // 这个数组是3行四列,第一个参数管行,第二个参数管列
  [9,8,7,6],
  [5,4,3,2],
  [10,11,12,13]
];
console.log(myArr[2][2])
function max(arr){
  var max = arr[0][0];
  for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++){
      if(arr[i][j]>max)
        max = arr[i][j];
    }
  }
  return max;
}
function min(arr){
  var min = arr[0][0];
  for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++){
      if(arr[i][j]<min)
        min = arr[i][j];
    }
  }
  return min;
}
console.log(max(myArr))
console.log(min(myArr))

// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
var arr = [1,2,3,4];
function remove(item){
  var arrNew = [];
  this.forEach((ele)=>{
    if(item === ele) return ;
    arrNew.push(ele);
  })
  return arrNew;
}
console.log(
  remove.call(arr,3)
);

var arr = [1,2,3,4];
function remove(item){
  var arrNew = [];
  arr.forEach((ele)=>{
    if(ele !== item)
    arrNew.push(ele);
  })
  // 通过length=0来清空数组
  // 我觉得应该有clear方法,但是不知道如何调用
  arr.length = 0;
  arr = arr.concat(arrNew);
}
  remove.call(arr,5)
  console.log(arr);

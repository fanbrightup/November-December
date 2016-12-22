var arr = [1,2,3,3,2];
function find(arr){
  var obj = {};
  var arrNew = [];
  arr.forEach((ele)=>{
    if(ele in obj){
      arrNew.push(ele);
    }else{
      //  数字不能直接做对象的属性,所以不能直接使用.运算符,而要使用[]来定义属性
    obj[ele] = ele;
  }
  })
  obj = null;
  return arrNew;
}
console.log(find(arr));

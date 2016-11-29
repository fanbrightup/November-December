var arr_one = [1,2,3,6];
var arr_two = [3,4,5,6];
function merge(one,two){
  var result = one;
  for(let i = 0;i<two.length;i++){
    if(-1==one.indexOf(two[i]))
      result.push(two[i]);
// 在循环的结尾是不需要在写continue的,多此一举
}
  return result.sort();
}
console.log(merge(arr_one,arr_two))

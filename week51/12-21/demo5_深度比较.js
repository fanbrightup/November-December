var one = {
  name:'h',
  age:22
}
var two = {
  name:'h',
  age:22
}
var three = {
  name:'h',
  age:23
}
function deepEqual(oneObj,twoObj){
  if(oneObj === twoObj) return true;
  for(prop in oneObj){
    if(oneObj[prop] != twoObj[prop]) return false;
  }
  return true;
}
console.log(
  deepEqual(one,one)
);

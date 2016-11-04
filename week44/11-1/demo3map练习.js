var old = [1,2,3,4,5];
var young = old.map((val,i,a)=>{
  return a;
});
var selected = old.filter((val,i,a)=>{
  return a[i] < 2;
})
console.log(young);
console.log(selected);
console.log(old);

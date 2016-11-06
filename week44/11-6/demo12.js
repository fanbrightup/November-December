// 第一次
console.time('first');

function bouncer1(arr) {
  return arr.filter(Boolean);
}
for(let i = 1000;i>0;i--){
  bouncer1([7, "ate", "", false, 9,false, null, 0, NaN, undefined, "",false, null, 0, NaN, undefined, ""])

}
console.timeEnd('first');

//  第二次
console.time('second')

function bouncer2(arr) {
  return arr.filter((val)=>{
    return  Boolean(val);
  })
}
for(let i = 1000;i>0;i--){
  bouncer2([7, "ate", "", false, 9,false, null, 0, NaN, undefined, "",false, null, 0, NaN, undefined, ""])
}
console.timeEnd('second');

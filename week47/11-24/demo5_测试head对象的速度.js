console.time("global");
for(let i = 0;i<9999999;i++){
  global.parseInt(3.222)
  for(let j = 0;j<10;j++){
    global.parseInt(3.222)
  }
}
console.timeEnd("global");
console.time("not_global");
for(let i = 0;i<9999999;i++){
  parseInt(3.222);
  for(let j = 0;j<10;j++){
    parseInt(3.222)
  }
}
console.timeEnd("not_global");

/*

性能差距在30%左右，不要显示的将head/window/global声明出来，会影响性能。
[Command: node /home/try/Desktop/November-December/week47/11-24/demo5_测试head对象的速度.js]
global: 504.644ms
not_global: 355.468ms
[Finished in 1.018s]
*/
// undefined in this    >> true     即undefined 是全局作用域的一个属性。null不是
// null  in this  >> false

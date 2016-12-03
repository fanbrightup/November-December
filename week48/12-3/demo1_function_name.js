function a(){
  console.log("hello");
  console.log(this == global);
}
for(var pro in new Array){
  console.log(pro);
  console.log('h')
}

console.log(Array.prototype.hasOwnProperty('slice'))
console.log(global.prototype)

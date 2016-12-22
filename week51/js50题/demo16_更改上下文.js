var obj = {
  name:'fan',
  age:22
}
function say(){
  console.log(this);
  console.log('name '+this.name);
  console.log('age '+this.age );
}
// say();
// say.call(obj);

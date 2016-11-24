var Person = function  (name,age,id){
  this.name = name;
  this.age = age;
  this.id = id;
  this.getName = ()=>{
    console.log(name);
    return this.getName;
  };

}
var one = new Person("fan",23,1234);
console.log((one.getName())());
// console.log(one.constructor.name);
console.log(one.constructor );
console.log(one.constructor == Person);

//当函数名a不存在时，constructor返回的是Person，当函数名a存在时，值为a

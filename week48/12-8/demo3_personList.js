class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}
var personList = [];
exports.add = function (name,age){
  personList.push(new Person(name,age));
}
exports.show = function(){
  console.log(personList);
}
exports.get = function(){
  return personList;
}
exports.getStr = function(){
  var str = '';
  personList.forEach((item,i)=>{
    str += `第${i}条:\t姓名\t${item.name}\t年龄\t${item.age} \n`;   // 使用了较多的\t来格式化输出更美观
  })
  return str;
}
exports.init = function(){
  personList = [];
}

//  若将类赋值给某个变量，则需使用那个变量来进行初始化，
// 如果没有赋值，则使用类名来进行初始化
var p = class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
}
var person_1 =  new p("fan",22)
console.log(person_1)

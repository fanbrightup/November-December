switch(1 + 3){
    case 4:
        console.log("is 4")
    case 2 + 2:
        console.log("4")
        break;
    default:
        console.log('h')
}
var obj = {
  name : "fan",
  age :22,
  details:{
    language:"chinese"
  }
}
console.log(
  obj["details"]["language"]

)

class Person{
  // 如果要接参数,就在constructor()中定义形参
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}
var p1 = new Person("fan",22);
console.log(p1);

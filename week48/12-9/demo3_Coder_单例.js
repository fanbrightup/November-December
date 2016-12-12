var Person = require("./demo3_Person");
var _instance = null;   // 指向单例的变量要放在类定义外部,以_开头表示是内部变量,外部取不到.
class Coder extends Person{
  constructor(name){
    super();
    this.name = name;
  }
   static getInstance(newName){
    if(null === _instance){
      _instance = new Coder(newName);
      return _instance;
    }else{
      return _instance;
    }
  }
  getName(){
    console.log(this.name);
  }

  code (){
    console.log("程序员打代码");
  }
  eat(){
    console.log("子类覆盖eat")
  }
  static show(){
    console.log("show()方法,静态方法")
  }
}
module.exports = Coder;

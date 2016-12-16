//  Nodejs的模块不是类,他的每一个函数都有自己的this.会出现this丢失的情况
//  所以最好是直接对exports对象进行操作,避免this的问题.不能用类的思路来处理模块
exports.name = 'old';
var myName = "cccfan";
function setName(aName){
  // name = myName;
  // console.log(myName);
  exports.name = aName;  // this的作用域变了,所以没法来进行对exports.name属性的替换
  // console.log(this);
}
// exports.name = name;
exports.init = function (itName){
  if(!itName){
    setName(myName);
  }else{
    setName(itName);
  }
}
exports.show = function(){
  // this.name = "ssss";
  console.log(exports.name);
  // console.log(this);
}

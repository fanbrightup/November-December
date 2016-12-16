var util = require("util");
var Person = require("./demo3_Person.js");

class Student extends Person{
  study(){
    console.log("学生学习");
  }
}
module.exports = Student;

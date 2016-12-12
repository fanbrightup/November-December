var Person = require("./demo3_Person");
class Teacher extends Person{
  teach() {
    console.log("老师教书");
  }
}
module.exports = Teacher;

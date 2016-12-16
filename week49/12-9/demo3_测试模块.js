var Student = require("./demo3_Student.js");
var studentOne = new Student();
studentOne.study();
studentOne.eat();
studentOne.sleep();


var Teacher = require("./demo3_Teacher");
var teacherOne = new Teacher();
teacherOne.teach();
teacherOne.eat();
teacherOne.sleep();

var Coder = require("./demo3_Coder");
var coderOne = new Coder();
coderOne.code();
coderOne.eat();
Coder.show();

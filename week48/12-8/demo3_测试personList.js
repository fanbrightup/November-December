var personList = require("./demo3_personList");
personList.add('fan',22);
personList.add('li',23);
var arr = personList.get();
var str = personList.getStr();
console.log(arr);
console.log(str);

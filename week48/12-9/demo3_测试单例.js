var Coder = require("./demo3_Coder");
// 通过类调用来获取实例对象.
var coderOne = Coder.getInstance("one");  // 通过getInstance来获取实例,而不是通过new
var coderTwo = Coder.getInstance("two"); // 第一次调用时产生的对象会一直保留,因为是引用传递,所以会一直保留单例

coderOne.getName();
coderTwo.getName();

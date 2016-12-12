var util = require("util");
var EventEmitter = require("events").EventEmitter;

class MyStream extends EventEmitter{
  constructor(name){
    super();   // 如果要添加自己的构造函数到新继承的类中,则一定要在构造函数中先显式的调用super()父类的构造函数
    this.name = name;
  }
  static show(){  // 静态方法只能类调用
    console.log("这是静态方法");
  }
  write(data){        // 定义实例方法   直接写方法名(参数)  就行了,不用写function
    this.emit("data",data);
  }
  getName(){
    return this.name;
  }
}
var stream = new MyStream("c");
// console.log(stream instanceof EventEmitter);
console.log(MyStream);
stream.on("data",(data)=>{     // 这部分是顺序执行的所以如果要捕获的话必须要先监听然后才能捕获.
                                //    顺序很重要
  console.log("datais " + data);
})
// console.log(stream);
stream.write("hello");
MyStream.show();
console.log(stream.getName());

var EventEmitter = require("events").EventEmitter;
class Count extends EventEmitter{
  constructor(){
    super();
    this.num = 3;
  }
  show(){
    // 保证输出的一定是大于等于0的值
    console.log(Math.max(this.num,0));
  }
  sub(val){
    this.num-=val;
  }
  add(val){
    this.num+=val;
  }
};
var countNum = new Count();
countNum.on("sub",(val)=>{
  countNum.sub(val);
  countNum.show();
})
countNum.on("add",(val)=>{
  countNum.add(val);
  countNum.show();
})
countNum.show();
countNum.emit("sub",5);
countNum.emit("add",5);
countNum.on('h',(a,b)=>{
  console.log(a)
  console.log(b)
})
countNum.emit("h","1","2");

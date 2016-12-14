var EventEmitter = require("events").EventEmitter;
class MyEmitter extends EventEmitter{};

var emiOne = new MyEmitter();
emiOne.on("h",(msg)=>{
  console.log(`信息为`);
  console.log(msg)  // 直接打印对象会是[object object] 不能正确显示
})
function s(){
  console.log("这厮另一种");
}
emiOne.addListener("h",s
  // 注意  不是addEventListener   没有Event
)
emiOne.on("h",()=>{

})
emiOne.emit("h",{a:"fan"})
console.log(emiOne.listenerCount("h"));
emiOne.removeListener("h",s)
emiOne.emit("h",{a:"fan"})
console.log(emiOne.getMaxListeners());
emiOne.setMaxListeners(20);
console.log(emiOne.getMaxListeners());

var fs = require("fs");
fs.access("sd",(status)=>{ console.log(status)})  //回调函数,有一个参数用来接收是否能访问,能就返回null,不能
                                                // 就返回错误原因

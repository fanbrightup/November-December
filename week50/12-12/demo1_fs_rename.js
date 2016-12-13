var fs = require("fs");
fs.rename("./t/sd","../c");
// 困扰我很久的一个问题,如何移动,可以借助rename来将路径和名字都一起修改,即可实现mv的效果

var shell = require("shelljs");
exports.changeSize = function(oldName,newName,width,height){
  var str = `convert ${oldName} -resize ${width}x${height}! ${newName}`;
  shell.exec(str);
}

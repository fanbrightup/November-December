var name = "fan";
function setName(newName){
  name = newName;
}
exports.name = name;
exports.init = function (newName){
  if(!newName){
    setName(name);
  }else{
    setName(newName);
  }
}
exports.show = function(){
  console.log(name);
}

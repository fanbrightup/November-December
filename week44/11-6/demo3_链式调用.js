var Bar = function (){
  this.first = '';
  this.last = '';
  this.fn = ()=>{console.log(this.first)}
}
// var first = 'global';
Bar.prototype.setFirst = (first)=>{
  this.first = first;
  return this;
}
Bar.prototype.setLast = function(last){
  this.last = last;
  return this;
}
var obj = new Bar();
obj.setFirst(1);
obj.setLast(2);
obj.fn()
console.log(obj);

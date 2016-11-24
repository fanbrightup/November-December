var color = "blue";
function showColor(){
  console.log(color);
}
(function show(){
  console.log(color);
})(color)
setTimeout(showColor,200);
color = "red";
ab = 1;
var head = global;
console.log(
  head.parseInt(34)
)

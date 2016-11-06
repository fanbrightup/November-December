function calculate(a,b){
  var c = a + b;
  console.log(this);
  console.log(this + ' equals '+c);
}
var temp = {name:'temp'};
calculate.apply(temp,[100,200]);
calculate.call(temp,200,300);
calculate(400,500)

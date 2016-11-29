var a = 1;
var b = 2;
//一     [a,b] = [b,a]; 解构赋值
//二
a = a - b;
b = a + b;
a = b - a;
console.log(a);
console.log(b);

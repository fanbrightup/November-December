var obj={};
obj[0] = "一";
obj[1] = "二";
obj[2] = "三";
obj.length = 3;

console.log(obj);
obj = Array.prototype.slice.call(obj);
obj.push('1');
console.log(obj);

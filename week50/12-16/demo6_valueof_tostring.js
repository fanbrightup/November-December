var a1 = '2' * {valueOf:()=>{return 3}};  //  相乘为6,是number
console.log( a1);
var a2 = '2' + {valueOf:()=>{return 3}};  //  相加为23,是string
console.log( a2);
var a3 = 2 + {valueOf:()=>{return 3}};  // 当为数字时,会主动调用valueOf方法
console.log(a3);
var b1 = 'j'+{toString:function(){return 's';}}
console.log(b1);


// 通过覆写对象的toString()和valueOf()方法
// valueOf()方法是为那些代表数值的对象而设计的,如Number对象


// 小心一种bug
"hello".ss = 17; // 这里装箱成String对象,但是执行完这条后会销毁ss属性的值,所以取不到ss的值
console.log("hello".ss);

// 避免使用 ==  下面是相等的,尽量使用 ===  来确保更安全
var answer = '1.0e0' == {valueOf:function(){return true;}}
console.log(answer);

if(global.JSON){   //  JSON是global的属性,使用this.JSON访问不到
  console.log('yes');
}else{
  console.log('no');
}
console.log(JSON.stringify("hh"));

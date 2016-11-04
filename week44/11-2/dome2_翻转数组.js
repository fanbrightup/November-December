
// 翻转数组方法一
function reverse1(str){
  // 翻转字符串
  var source = str.split('');
  var dest = new Array(source.length) ;
  source.forEach((val,i)=>{
    dest[source.length-1-i] = val;
  });
  return dest.join('');
}

//翻转方法二
function  reverse2(str){
  return str.split('').reverse().join('');
}


console.log(reverse2('hello'));

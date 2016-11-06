console.time('first');
var html = [];
for(let i=0;i<100;i++){
  html.push('<p>',i,'</p>');
}
html = html.join('');
console.timeEnd('first');
console.time('second');
var html2 = '';
for(let i=0;i<100;i++){
  html2+=('<p>',i,'</p>');
}
console.timeEnd('second');
// 直接使用原生的+= 要大大快于使用数组来操作
// first: 0.643ms
// second: 0.048ms
//

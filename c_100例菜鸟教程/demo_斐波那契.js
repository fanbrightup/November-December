// 斐波那契数列
// 0	1	1	2	3	5	8	13	21	34
function fb(n){
  v = 0;
  if(n == 1){
    v = 0;
  }
  if(n == 2){
    v = 1;
  }
  if(n>2){
    v =  fb(n-1)+fb(n-2);
  }
  return v;
}
// console.log(fb(10));
for(var i = 1;i<=10;i++){
  process.stdout.write(fb(i)+' , ');
}

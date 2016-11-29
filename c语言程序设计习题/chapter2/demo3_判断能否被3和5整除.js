// var count = 0;
// for(let i = 1;i<1000;i++){
//   if(check(i))  count ++;
// }
// console.log(count);
// function check(n){
//     if(n%3 == 0 && n%5 == 0){
//       console.log(n+"能够被3和5整除");
//       return true;
//     }else{
//       return false;
//     }
// }

var check3_5 = (function (){
  var count = 0;
  return function check(n){
    if(n%3 == 0 && n%5 == 0){
          console.log(n+"能够被3和5整除");
          count ++;
        }else{
          console.log(n+"不能被3和5整除");
        }
          return `能被3和5整除的总数为${count}`;
    }
})();
for(let i = 1;i<1000;i++){
  check3_5(i);
}
console.log(check3_5());

var start = 100;
var end = 200;
function check(n){
  for(let i = 2;i<n;i++){
    if(0 == n%i){
      return false;
    }
    return true;
  }
}
var count = 0;
for(let i = start;i<=end;i++){
  if(check(i)){
    count ++;
    console.log(i);
  }
}
console.log(`共有${count}个${count}个`)

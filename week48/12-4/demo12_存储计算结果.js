function isPrime(value){
  if(!isPrime.answers) isPrime.answers = {};
  if(isPrime.answers[value] != null){
    console.log("有答案缓存");
    return isPrime.answers[value];
  }
  var prime = value != 1;
  for(let i = 2;i < value;i++){
    if(value % i == 0){
      prime = false;
      break;
    }
  }
  return isPrime.answers[value] = prime;
}
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime.answers);
console.log(Math.max.apply(null,[1,2,3]))

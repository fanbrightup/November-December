// 这个问题的先后判断顺序很重要,将同时能被3和5整除这个判断放在最前边,否则无法正常捕获
for(let i = 1;i<=100;i++){
  if(i%5 == 0 && i%3 == 0){
    console.log('FizzBuzz');
    continue;
  }
  if(i%3 == 0){
    console.log('Fizz');
    continue;
  }
  if(i%5 ==0 && i%3 != 0){
    console.log('Buzz');
    continue;
  }
  console.log(i);
}

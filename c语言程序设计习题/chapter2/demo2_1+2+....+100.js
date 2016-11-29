
process.stdin.setEncoding('utf8');
process.stdin.on("readable",()=>{

  var chunk = process.stdin.read();
  if(chunk != null){
    var arr = chunk.split(' ');
    console.log(`求和:从${arr[0]}到${arr[1]}`);
    sum(Number(arr[0]),Number(arr[1]));

  }
})

function sum(start,end){

var total = 0;
for(let i = start;i<=end;i++){
  total += i;
}
console.log("结果为"+total);
}

var arr = ['a','b','c'];
function foreach(list,callback){
  for(let n = 0;n<list.length;n++){
    callback.call(list[n],n);
  }
}
function show(n){
  console.log(this);
  console.log(n);
}

foreach(arr,show);

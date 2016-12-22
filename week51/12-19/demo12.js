var arr = [{k:'a',v:4},{k:'b',v:5},{k:'c',v:3}]
arr.sort((a,b)=>{
    if(a.v>b.v){
      return true;
    }else{
      return false;
    }
});
console.log(arr);

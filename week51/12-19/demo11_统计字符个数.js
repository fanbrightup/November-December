var fs = require("fs");
fs.readFile("./demo6_打印.js",(err,data)=>{
  var countObj = {};
  var charArr = [];
  var str = data.toString();
  var arr = str.split('');
  arr.forEach((ele)=>{
    if(' ' == ele){
      ele = '空格';
    }else if('\n' ==ele){
      ele = '换行';
    }
    if(ele in countObj){
      countObj[ele] ++;
    }else{
      countObj[ele] = 1;
    }
  })
  if(' ' in countObj){
  }
  for(prop in countObj){
    // console.log(prop,countObj[prop]);
    charArr.push({key:prop,value:countObj[prop]});
  }

  // console.log(charArr);
  console.log('====================================================');
  charArr.sort((a,b)=>{
    if(Number(a.value)>Number(b.value)){
      return true;
    }else{
      return false;
    }
  })
  console.log(typeof charArr[1].value);
})
// 现在有一个问题,如何对这些数据进行一个排序

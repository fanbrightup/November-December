var fs = require("fs");
function count(){
  return new Promise((reslove,reject)=>{
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
      // 把数据拼成对象,形成一个整体不会被拆开,然后放到数组里,再根据每个对象的个数这个属性来进行排序
      // 排序的关键是不能使用 > < 号,具体原因还没高清,val值确实是number类型的.但是确实不明白
      for(prop in countObj){
        charArr.push({key:prop,val:countObj[prop]});
      }
      return reslove(charArr);
    })
  })
}

count().then((arr)=>{
    arr.sort((a,b)=>{
      // 这里的问题是我不能使用< > 号,会产生顺序混乱,
      // 这里正序,从大到小排
      return b.val - a.val;
    })
    console.log(arr);
})

// 现在有一个问题,如何对这些数据进行一个排序

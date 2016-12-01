#!/usr/bin/env node
/*
  本程序使用了中国天气网站的数据，测量成都的数据
*/
console.time('用时');
var request = require('request');
request('http://www.weather.com.cn/weather1d/101270101.shtml#dingzhi_first',
      (err,res,body)=>{
          if(!err && res.statusCode == 200){
            show( JSON.parse( find(body)).od );
  }
})
// 用于定位并解析出所需的字符串
function find(str){
  var arr = str.split(' ');
  var len = arr.length;
  var i = 0;
  for(;i<len;i++){
    if(arr[i] == 'observe24h_data')
      break;
  }
  // 如果没有被终止循环，则说明有错误
  if(i==len){
    console.log('something error');
    return false;
  }
  return arr[i+2].substr(0,arr[i+2].indexOf(';'));
}

// 用于显示的函数
function show(data){
  var city = data.od1;
  var time = data.od2[0].od21;
  var temp = data.od2[0].od22;
  var orien = data.od2[0].od24;
  var level = data.od2[0].od25;
  var msg = `${city}--今天${time}时--气温${temp}度--风向${orien}--风力${level}级`;
  console.log(msg);

}
console.timeEnd('用时');

#!/usr/bin/env node
/*
  本程序使用了中国天气网站的数据，测量成都的数据
*/
console.time('用时');
var mysql      = require('mysql');
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
  var time = data.od2[0].od21+'时';
  var temp = data.od2[0].od22+'度';
  var orien =  data.od2[0].od24;
  var level = data.od2[0].od25+'级' ;
  var msg = `${city}--今天${time}--气温${temp}--风向${orien}--风力${level}`;
  console.timeEnd('用时');

  console.log(msg);
  store(temp,orien,level);
  return msg;
}
// 存入数据库
function store(cd_temp,cd_orien,cd_level){
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'weather',
    password : '1',
    database : 'cd_weatherdb'
  })
  connection.connect();
  connection.query('SELECT @time:= NOW() AS time;',function(err1,rows1){
    var now ;
    if(err1){
      console.log(err1);
    }else{
      now = rows1[0].time;
      // console.log(now);
      var ss = `INSERT INTO weather_data VALUES('${now}','${cd_temp}','${cd_orien}','${cd_level}',NULL);`;
      connection.query(ss,function(err1,rows1){

      })
    }
    connection.end();
  })
}


// 创建数据库
//   create table weather_data(
//     time   varchar(20) not null,
//     temp   varchar(10) not null,
//     orien  varchar(20) not null,
//     level  varchar(10) not null,
//     event_id  int auto_increment not null,
//     primary key(event_id)
// )DEFAULT CHARSET=utf8;
//   设置每小时执行, * */1  * * * 是每分钟执行,因为第一个数是任意值,
//   0   */1  *  *  * 则是每一小时的0分钟执行,只满足一次条件,所以,一小时一次.第一个数要是一个数字,不能是*;

#!/usr/bin/env node
'use strict';

var program = require('commander');
var request = require('request');
var repl = require('repl');
var obj = {};
program
.version('1.1.2')
.option('-n,--next','在repl终端中输入next(),回车即可显示笑话')
.parse(process.argv);
// 这个key需要到聚合数据 juhe.cn网站去申请，100次免费
var url1 = "http://japi.juhe.cn/funny/list.from?cat=5&st=";
var url2 = "&count=20&key=9524f41467373dec9a11754c6b4f8445"
var startNumber = 0;
var url = url1+startNumber+url2;
// 获取数据
function getData(dataUrl){
    request(dataUrl,(error,res,data)=>{
      if(!error && res.statusCode == 200){
        obj = JSON.parse(data);
  }
});
};
// 输出数据
function outPutData(){
  getData(url1+startNumber+url2);
  let i = 0;
  repl.start('> ').context.next =
    function next(){
      if(i<20){
        console.log('第'+obj.result.data[i].id+'  '+obj.result.data[i].title);
        i++;
      }else if(i>=20){
        startNumber += 20;
        getData(url1+startNumber+url2);
        console.log('发起新的请求，请求成功');
        i = 0;
      }
    };
}

outPutData();

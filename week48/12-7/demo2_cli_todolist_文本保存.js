var fs = require("fs");
var args = process.argv.splice(2);
var file = process.cwd()+"/mytasks";
// var tasks = [];
var msg = args[1];
if(args.length <1 ){
  console.log("参数数量不对");
  return 0;
}

if(args[0] == "list"){
  initArray(show);
}else if(args[0] == "add"){
  initArray(add);  //不能在这给add传参数,会使add直接执行
}else{
  console.log("第一个参数为list  或  add");
  return 0;
}

function initArray(fn){
  var tasks = [];
  fs.exists(file,(exists)=>{
    if(exists){

    fs.readFile(file,'utf8',(err,data)=>{
      if(err){
      console.log("err 发生");
      }
      var data = data.toString();
      // console.log("测试"+data);
      tasks = JSON.parse(data || []);
      fn(tasks,msg);
    })
    }
  })
}
function show(tasks){
  console.log(tasks);
}
function add(tasks,msg){
  console.log(typeof tasks);
  tasks += "\n"+msg
  fs.writeFile(file,JSON.stringify(tasks),'utf8',(err)=>{
    if(err){
      console.log("存储失败");
    }else{
      console.log("存储成功");
    }
  })
}

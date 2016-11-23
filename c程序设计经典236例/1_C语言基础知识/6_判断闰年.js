process.stdin.setEncoding("utf8");
process.stdin.on("readable",()=>{
  var chunk = process.stdin.read();
  if(chunk != null){
    // bug产生原因，键盘输入的字符串最后都会带上\n，要加以注意。
    if(chunk == 'q\n'){
      process.exit();
    }
    var year = parseInt(chunk);
    if(year%4 == 0&&year%100!=0 || year%400==0){
      console.log("是闰年");
    }else{
      console.log("不是闰年");
    }
    console.log("=================输入q退出本程序");
  }
});

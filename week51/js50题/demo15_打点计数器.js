class Dadian{
  constructor(start,end){
    this.start = start;
    this.end = end;
  }
  //  这里函数名不能使用start会冲突
  begin(callback,stopPoint){
    console.log(this.start);
    this.index = this.start;
   this.timer = setInterval(()=>{
      if(this.index < this.end){
      this.index++;
      if(this.index === stopPoint){
        // thicancel();
        callback(this);
      }
      console.log(this.index);
    }else{
      return
    }
    },100);
  }
  //  这里的难点是dian.cancel的this指向会丢失,所以必须要再cancel这个函数被调用前,先在begin函数
  //  中将this保存下来为self,使得接下来清除定时器时不会出现this丢失的问题
  //  这里将cancel写为静态方法
  static cancel(self){
    clearTimeout(self.timer);
    console.log('=========最后一个是====\n');
  }
  getIndex(){
    return this.index;
  }
}
var dian = new Dadian(1,50);
dian.begin(Dadian.cancel,5);// 通过一个异步的回调函数来实现在外部的终止
// 这里牢记定时器是异步的,所以直接获取dian里的属性是不行的,需要借助毁掉函数,或者promise来解决这个问题

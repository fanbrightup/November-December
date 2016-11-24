name = 'out'
var obj = {
  name : "fan",
  fnOne:function(){
    var that = this;
    var fnInner = function (){
      console.log(`内部的${this}`+this.name);   // 出现this丢失，指向了global
      console.log(`外部的${that}`+that.name);
    }()
  }
}

obj.fnOne();

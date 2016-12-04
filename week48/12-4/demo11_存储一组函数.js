var obj = {
  num : 1,
  cache:{

  },
  add:function(fn){
    if(!fn.id){
      // 当我在这个函数里要使用num和cache时,我需要使用obj或this来引用它;
      fn.id = obj.num++;
      this.cache[fn.id] = fn;
      console.log("添加成功")
    }else{
      console.log("已经添加过了");
    }
  }
}

function f1(){
  console.log("hh");
}
obj.add(f1);
obj.add(f1);

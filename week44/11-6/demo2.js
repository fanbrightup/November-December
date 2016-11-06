var normalDiscount = {
  discount:0.1,
  getDiscount:function (input){
    console.log(this.discount*input);
  }
}
// 使用call ,  apply  ,bind  来改变函数的context
normalDiscount.getDiscount(100)
normalDiscount.getDiscount.call({discount:0.2},100)
normalDiscount.getDiscount.apply({discount:0.3},[100])
var bind1 = normalDiscount.getDiscount.bind({discount:0.4});
bind1(100);
var bind2 = normalDiscount.getDiscount.bind({discount:0.5},100);
bind2();

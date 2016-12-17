var Vue = require("vue");
var data = {a:1};
var vm = new Vue({
  el:"#example",
  data:data
})    //  每个 Vue 实例都会代理其 data 对象里所有的属性
// 除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $，以便与代理的 data 属性区分
console.log(vm.$data === data);
console.log(data.a);
data.b = 'data_b';
console.log(data.b);
console.log(vm.b);
vm.b = 'vm_b'
console.log(data.b);
console.log(vm.b);
//  只有生成vm实例时绑定的方法才能响应,后边添加的属性各是各的,data.b 和 vm.b是两个值,data.a和vm.a是对同一个值的引用
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
  console.log("原来的值为:"+oldVal);
  console.log("现在的值为:"+newVal);
})
vm.a = 'change'

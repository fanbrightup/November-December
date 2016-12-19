var main = new Vue({
  el:"#main",
  data:{
    items:[]
  },
  methods:{
    change:function(item){
      item.done = item.done?false:true;
    }
  }
});


var add_list = new Vue({
  el:"#add_list",
  data:{
    text:'',
    number:0,
    done:false
  },
  methods:{
    add:function(){
      this.number++;
      main.items.push({'number':this.number,'text':this.text,'done':this.done});
      this.text = '';
    },
    clear:function(){
      this.text = '';
    }
  }
});

var Vue = require('vue')
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName;
      console.log(this.fullName);
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val;
      console.log(this.fullName);
    }
  }
})
vm.firstName="f"

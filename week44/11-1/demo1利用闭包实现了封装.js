
var Bike = function() {

  // Only change code below this line.
  var age = 20;
  this.getAge = function(){
    return age;
  };
  this.setAge = function(n){
    age = n;
  };
  var user = {};
  this.setName = function(name){
    user.name = name;
  }
  this.getName = function(){
    return user.name;
  }

};


var myBike = new Bike;
myBike.setName('fan');
console.log(myBike.getName());
console.log(myBike.getAge());
console.log(myBike);
var myBike2 = new Bike;
console.log(myBike2.getName());

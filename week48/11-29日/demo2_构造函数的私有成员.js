var Person = (function(){
  var age = 25;
  function InnerPerson(name){
    this.name = name;
  }
  InnerPerson.prototype.getAge = function(){
    return age;
  }
  InnerPerson.prototype.growOlder = function(){
    age++;
  };
  return InnerPerson;
})();
var person1 = new Person("Nic");
var person2 = new Person("Greg");
console.log(person1.name);
console.log(person1.getAge());
console.log(person2.name);
console.log(person2.getAge());
person1.growOlder();
console.log(person1.getAge());
console.log(person2.getAge());
console.log(person2.name);
console.log(person1.name);

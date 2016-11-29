// var person = (function(){
//   var age = 25;
//   return {
//     name:"Nic",
//     getAge:function(){
//       return age;
//     },
//     growOlder:function(){
//       age++;
//     }
//   }
// })();
var person = (function(){
  var age = 25;
  function getAge(){
    return age;
  }
  function growOlder(){
    age ++;
  }
  return {
    name:"Nic2",
    getAge:getAge,
    growOlder:growOlder
  };
})();
console.log(person.name);
console.log(person.getAge());
person.age = 100;
person.growOlder();
console.log(person.getAge());
person.growOlder();

console.log(person.getAge());

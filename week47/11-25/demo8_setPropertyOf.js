var Animal = {
  speak() {
    console.log(this.name + ' makes a noise.');
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}
// Object.setPrototypeOf(Dog.prototype, Animal);
   Object.setPrototypeOf(Dog.prototype,Animal);
var d = new Dog('Mitzie');
d.speak();

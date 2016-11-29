class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }

  static sayHello(){
    console.log("hello everyone");
  }
}

class Dog extends Animal {
  constructor(name){
    super(name);
  }
  static speak() {
    console.log(this.name + ' barks.');
    super.sayHello(); //  只有在静态方法中才能使用super来引用父类的静态方法，且中间不能
                      //  实例方法
  }
}

var d = new Dog('Mitzie');
// 'Mitzie barks.'
Dog.speak();
// Animal.sayHello();

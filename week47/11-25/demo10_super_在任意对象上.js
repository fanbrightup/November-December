var obj1 = {
  method1() {
    console.log("method 1");
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"

function Foo() {
    s = 1;
    getName = function () { console.log (1); };
    return this;
}
Foo.getName = function () { console.log (2);};
Foo.prototype.getName = function () { console.log (3);};
// var getName = function () { console.log (4);};
// function getName() { console.log (5);}
console.log(new Foo())
// Foo().getName()
new Foo().getName()
// console.log(Foo())
// Foo.getName()
// new Foo().getName()
//
// Foo.getName();
// getName();
// getName()
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();

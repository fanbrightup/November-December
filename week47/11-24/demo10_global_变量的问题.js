var foo = 'bar';
console.log(global.foo)
// 这样写在html中没有问题，在nodeshell中也没有问题，但是使用node  demo10.js运行却不行。很混乱
// html中this.foo 和 window.foo 都可以取到foo，但是node下global不能取到。但是不加var声明，在global下可以取到。

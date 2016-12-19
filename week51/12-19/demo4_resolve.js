function doubleUp(value) {
        return value * 2;
    }
    function increment(value) {
        return value + 1;
    }
    function output(value) {
        console.log(value);// => (1 + 1) * 2
    }
//  通过resolve传参
    var promise = Promise.resolve(1);
    promise
        .then(increment)
        .then(doubleUp)
        .then(output)
        .catch(function(error){
            // promise chain中出现异常的时候会被调用
            console.error(error);
        });
 // return 的值会由 Promise.resolve(return 的返回值);
 // 每次then执行成功,都会经过Promise.resolve()来包装
 // 进行相应的包装处理，因此不管回调函数中会返回一个什么样的值，最终 then 的结果都是返回一个新创建的 promise 对象。
// 即后边的then和catch不是针对第一个promise的,而是针对自己的上一个then或catch返回的新的promise对象来处理的


var aPromise = new Promise(function (resolve) {
     resolve(100);
 });
 var thenPromise = aPromise.then(function (value) {
     console.log(value);
     return "hh"
 });
 var catchPromise = thenPromise.catch(function (error) {
     console.error(error);
     return '11111111111111';   // then和catch里的return和error不能被外界获取到.
 });
 console.log(aPromise !== thenPromise); // => true
 console.log(thenPromise !== catchPromise);// => true
// 每次的链式调用都有新的promise产生
console.log(catchPromise);

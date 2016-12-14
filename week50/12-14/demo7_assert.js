var assert = require("assert");
// assert中可选的msg是当错误时,显示的错误信息
// assert.notEqual(1,1);
// assert(false,"it's a false");
// assert.ok(false,"it's a false");  // assert(val,msg)  等同于 assert.ok(val,msg)
assert.deepEqual(Error('a'),Error('b'));// 当对象的自身所拥有的属性都相等时,就深度相等
assert.deepEqual({a:1},{a:'1'}); // 相等,对每个属性的  ==
// assert.deepStrictEqual({a:1},{a:'1'})  // 不相等,=== 不会进行转换
assert.equal(1,'1') // 相等   整体的 ==
assert.notEqual(1,2); // !=
assert.notStrictEqual(1,'1'); // !==
// 当ifError() 括号内的值为真时,则抛出错误,及括号内的值,可以用于回调内的error检验
// assert.ifError('error');
// assert.ifError(new Error());
// assert.ifError(0);  // 无错
// assert.ifError(1);  // 有错

// assert.fail(1,1,"错误原因",'=');   作用是抛出一个错误,文字为第三个参数,如果第三个参数未定义,则错误提示为,
                                  //  第一个参数加最后的操作符加第二个参数
assert.fail(0,0,"hh",'=');

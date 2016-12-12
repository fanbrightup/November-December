var path = require("path");
console.log(
    path.join("/a/","/b/","/c","d","e.txt"); // join方法可以很好的帮助处理分割符的问题,自行添加删除.
                                              //  join方法的参数都是字符串,不能是对象
);
// path模块主要处理字符串,不会对路径进行验证,所以应该都是同步的

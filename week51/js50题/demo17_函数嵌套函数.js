function funFun(first){
  // 内部返回一个函数,别少了function
  return function fun(second){
    console.log(`${first},${second}`);
  }
}
funFun('hello')('world')
// 连续两个函数,是两次调用

async function f() {
  await Promise.reject('出错了'); // reject之后的也不会执行.   这两天根据先后顺序只能执行一条
  return await "hh";   // return之后就不会有执行了.
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))


function titleCase(str) {
  // str = str.toLowerCase();
  var arr = str.split(' ');
  arr = arr.map((val)=>{
    val = val.toLowerCase();
    var c = val.split('');
    // c.map((val)=>{
    //   return val.toLowerCase();
    // })
    c[0] = c[0].toUpperCase();
    // console.log(c);
    return c.join('');
  })
  // console.log(arr);
  return arr;
}
  console.log(titleCase("I\'m a liTtle tea pot"));
  console.log(titleCase('HERE iS myY hANDLE HERE IS MY SPOUT'));
  // console.log(titleCase('aq bq cq dq EQ fq GQ'));



  // toUpperCase()不改变字符串，需要再次赋值才能完成调用

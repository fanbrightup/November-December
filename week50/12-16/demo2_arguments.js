console.log(Array.isArray(process.argv));
function fn(){
  console.log(Array.isArray(arguments));
  // 这里可以使用[]  代替Array.prototype
  Array.prototype.forEach.call(arguments,(ele)=>{
    console.log(ele);
  });
  var arr = Array.prototype.slice(arguments);
  console.log(Array.isArray(arr));

}
fn('1','2','3')

// 注: Array的concat方法不能通过call或apply来直接调用,需要先slice成真正的数组再使用concat()
//  其他的Array方法,都可以通过Array.prototype.method()  或  [].method()来进行调用

function palindrome(str){
// str = str.replace(/[\W_]/g,"").toLowerCase();  可以实现剔除不需要的字符的功能
var first  =   str
                  .toLowerCase()
                  .split('')
                  .filter((val)=>{  return val >= 'a' && val <= 'z' || Number(val);})
                  // .join('');
var second =  first
                  // .split('')
                  .reverse()
                  // .join('');
          return first == second;

}

console.log(palindrome('123321'));
var str ;
str.replace

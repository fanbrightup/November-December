function check(text){
  if(text== null || text == undefined){
    // console.log('');
    return false;
  }
  if(text.length ==1){
    return true;
  }
  if(text.charAt(0)!= text.charAt(text.length-1)){
    return false;
  }
  return check(text.substr(1,text.length-2));
}
console.log(check(undefined));

// User类
class User{
  constructor(name,password){
    this.name = name;
    this.password = password;
  }
  set(name,password){
    this.name = name;
    this.password = password;
  }
  getName(){
    return this.name;
  }
  getPassword(){
    return this.password;
  }
}
var userList = [];
function addUser(name,password){
  userList.push(new User(name,password));
  console.log('添加成功:现在有'+userList.length+"用户");
}
addUser('fan','123');
addUser('li','456');
console.log(userList);
function check(name,password){
  //  return 不会跳出forEach的循环
  var result = false;
  userList.forEach((ele)=>{
    if(name === ele.name){
      if(password === ele.password){
        console.log("验证成功");
        result = true;
      }
    }
  });
  return result;
}

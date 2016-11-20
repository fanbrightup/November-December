#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#define PASSWORD 1
#define CNT  2  // 可以错两次
int check_password(int n);
int get_request();
void show_index_page();
int main(){
  printf("欢迎使用我行的ATM机\n");
  printf("=====================================================\n");
  check_password(CNT);
  // 登录成功
  show_index_page();
  get_request();



  return 0;
}
// 定义密码验证函数
int check_password(int n){
  if(n<0){
    printf("错误三次，退出登录\n");
    return 0;
  }
  printf("请输入密码:\n");
  long input_password = 0 ;
  scanf("%ld",&input_password);
  if(input_password == PASSWORD){
    printf("密码正确，登录成功");
    return 0;
  }else{
    printf("密码错误，错误三次将退出登录\n");

    check_password(--n);
  }
}
// 定义get_request()函数，用于显示主界面，及获取用户下一个请求
int get_request(){
// bug   输入字符会不停的发起get_request();
// 错误原因：是由于输入字符后的那个回车键，导致输入字符时会相当于调用了字符数加回车次数，
// 我想怎样将一次回车的所有字符都一次取完，不让其进入下一次的循环。
// 猥琐的招数，判断是否是换行，是的话就在获取一次getc就好了，
  char work_id,temp;
  work_id = getc(stdin);
  while(temp!='\n'){
    temp = getc(stdin);
  }
  // if(work_id>4||work_id<0){
  if(work_id<'a' || work_id >'e'){
    printf("\n您输入的业务类型错误，请重新输入:\n\n");
    printf("=====================================================\n");
    get_request();
    }
}
void show_index_page(){
  printf("请从下方选择您的业务，输入相应的业务序号\n");
  printf("1a、查询余额\n");
  printf("2b、取款\n");
  printf("3c、转账\n");
  printf("4d、实时存款\n");
  printf("0e、退卡\n");
  printf("请输入业务序号：\n");
}

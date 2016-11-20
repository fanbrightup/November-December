#include <stdio.h>
#include <ctype.h>
int main(){
  char c[] = "123c@#FDs  P[e?x2";
  for(int i = 0;c[i]!='\0';i++){


    //  分别验证是否是数字，是否可打印，是否是小写，是否大写
    // if(isdigit(c[i])){
    // if(isgraph(c[i])){
    // if(islower(c[i])){
    // if(isupper(c[i])){
    // if(isprint(c[i])){
    // if(isspace(c[i])){
    // if(ispunct(c[i])){
    if(isxdigit(c[i])){

      printf("%c",c[i]);
    }
  }
}

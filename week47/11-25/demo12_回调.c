#include <stdio.h>
#include <string.h>
typedef void (*fn)(char *);
// void test(char * name,fn sayHello){
void test(char * name,void (*sayHello)(char *) ){
  sayHello(name);
};
void sayHello(char * name){
  printf("传给我%s\n",name);
}
void count(char * str){
  int num  = strlen(str);
  printf("共有%d个字符",num);
}
int main(int argc, char const *argv[]) {

  test("一个字符串",sayHello);
  test("谁",count);
  return 0;
}

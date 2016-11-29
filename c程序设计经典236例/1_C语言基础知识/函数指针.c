#include <stdio.h>
typedef void(*show)(char *str);
void s(char *str){
  printf("%s\n",str);
}
void fn(show s,char *ch){
  s(ch);
}
int main(int argc, char const *argv[]) {
  fn(s,"hh");
  return 0;
}

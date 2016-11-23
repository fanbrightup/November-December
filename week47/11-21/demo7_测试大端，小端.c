#include "stdio.h"
int main(int argc, char const *argv[]) {
  int a = 0x12345678;
  char * p;
  p = (char *)(&a);
  if(*p == 0x78){
    printf("小端" );
  }else{
    printf("大端");
  }
  return 0;
}

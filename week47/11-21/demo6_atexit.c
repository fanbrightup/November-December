// atexit可多次绑定同一个函数，但是执行顺序是倒序，所以参照栈的模型。
#include <stdio.h>
#include <stdlib.h>
void f1(void){
  printf("the 11111 exit handler\n");
}
void f2(void){
  printf("the 22222 exit handler\n");
}
int main(void){
  if(atexit(f1)!=0){
    perror("fail to set 11111(1)");
    exit(1);
  }
  if(atexit(f1)!=0){
    perror("fail to set 11111 (2)");
    exit(1);
  }
  if(atexit(f2)!=0){
    perror("fail to set 11111");
    exit(1);
  }

  return 0;
}

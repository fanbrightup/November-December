#include <stdio.h>
#include <stdlib.h>
int main(int argc, char const *argv[]) {
  // int year = (int)argv[1];
  int year  = atoi(argv[1]);
  if(year<=0){
    printf("输入非法");
    perror("error");
    exit(-1);
  }
  printf("%d\n",year);
  if(year%100 != 0 && year%4 == 0 || year % 400 == 0){
      printf("是闰年");
  }else{
    printf("不是闰年");
  }
  return 0;
}

#include <stdio.h>
#include <stdlib.h>
// 我记错了参数,第一个参数默认是运行函数自身的命令,即./a.out默认就有一个
// 使用atoi将字符转为整型
int main(int argc, char const *argv[]) {
  if(argc < 3){
    printf("参数需要两个");
    return 0;
  }
  int start = atoi(argv[1]);
  int end = atoi(argv[2]);
  printf("%d\n",start);
  printf("%d\n",end);

  int total = 0;
  for(int i = start;i<=end;i++){
    total += i;
  }
  printf("%d\n",total);
  printf("%s\n",argv[0]);
  return 0;
}

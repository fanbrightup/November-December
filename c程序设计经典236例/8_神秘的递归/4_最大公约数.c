#include <stdio.h>

int fx(int a,int b){
  return b?fx(b,a%b):a;  // 使用的是短除法
}
int main(int argc, char const *argv[]) {
  int data = fx(319,377);
  printf("%d\n",data);
  return 0;
}
// 100  75

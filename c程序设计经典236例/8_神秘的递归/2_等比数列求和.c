// gcc 2.c -o 2.out  -lm   要加-lm来链接到math库
#include <stdio.h>
#include <math.h>
int first,d,n;
int fx(int n){
  if(1 == n)
    return first;  //这里不是return  n 一个小bug耽误了我10分钟
  int s = first*pow(d,n-1);
  return  s+fx(n-1);
}
int main(int argc, char const *argv[]) {
  scanf("%d %d %d",&first,&d,&n);
  int z = fx(n);
  printf("%d\n",z);
  return 0;
}
// 2 2 3
// 2 4 8  sum=14

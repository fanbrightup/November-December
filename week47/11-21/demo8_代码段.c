#include <stdio.h>
int f(int a,int b){
  return a + b;
}
int main(int argc, char const *argv[]) {
  int (*p)(int,int);
  void *q;
  p = f;
  q = (void *)p;
  printf("the code is :0x%x\n",*((int *)q));
  // ((int *)q) = 0x123b45678;
  return 0;
}

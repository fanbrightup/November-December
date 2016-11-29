#include <stdio.h>
int main(int argc, char const *argv[]) {
  int a = 1;
  int b = -2;
  // 一
  // int tmp ;
  // tmp = a;
  // a = b;
  // b = tmp;
  b = a - b;
  a = a - b;
  b = a + b;
  printf("%d\n",a);
  printf("%d\n",b);
  return 0;
}

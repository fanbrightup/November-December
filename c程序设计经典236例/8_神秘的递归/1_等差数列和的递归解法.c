#include <stdio.h>
int first,d,n,s;
int main(int argc, char const *argv[]) {
  scanf("%d %d %d",&first,&d,&n);
  int fx(int);
  int z;
  z = fx(n);
  printf("%d\n",z);
  return 0;
}
int fx(int n){
  if(n == 1)
    return first;
  int s = (n-1)*d+first;
  return s+fx(n-1);
}


//   1 2 3 d=1 ,n=3,first = 1;
// (n-1)*d + first;

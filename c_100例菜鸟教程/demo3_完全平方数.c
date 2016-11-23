#include <stdio.h>
#include <math.h>
// #include <stdlib.h>
int main(){
  // double t = 0;
  for(int i = 0;i<100000;i++){

    int x = (int)sqrt(i+100);
    int y = (int)sqrt(i+168+100);
    if(x*x == (i+100)&&(y*y == (i+100+168))){
      printf("%d\n",i);
    }
  }

  // printf("%lf",sqrt(1));
  return 0;
}

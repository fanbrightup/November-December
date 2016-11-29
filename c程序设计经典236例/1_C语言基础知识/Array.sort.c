#include <stdio.h>
typedef int (*cmp)(int a[3][4]);
int sort(int a[3][4],int *my_max,int *my_min){
  int max;
  int min;
  min = max = a[0][0];
  for(int i = 0;i<3;i++){
    for(int j = 0;j<4;j++){
      if(a[i][j]>max)   max = a[i][j];
      if(a[i][j]<min)   min = a[i][j];
    }
  }
  *my_max = max;
  *my_min = min;
}

int main(int argc, char const *argv[]) {
  int my_arr[3][4] ={
    {9,8,7,6},
    {5,4,3,2},
    {10,-1,12,13}
  };
  int num = sizeof(my_arr)/sizeof(my_arr[0][0]);
  printf("%d\n",num );
  int my_max;
  int my_min;
  sort(my_arr,&my_max,&my_min);
  printf("%d\n",my_max);
  printf("%d\n",my_min);
  return 0;
}

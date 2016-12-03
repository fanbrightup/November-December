#include <stdio.h>
int fx(int *arr,int n){
  if(1 == n)
    return arr[0];
  return arr[n-1]+fx(arr,n-1);
  // 每次递归都有一个确定的值被得出
}
int f(int first,int multi,int time){
  if(time == 1)
    return first;
  return first+multi*f(first,multi,time-1);
}
int main(int argc, char const *argv[]) {
  int arr[5] = {1,2,3,4,5};
  int total = 0;
  total = fx(arr,5);
  printf("%d\n",total);
  printf("%d\n",f(2,2,2));

  return 0;
}

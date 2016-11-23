#include <stdio.h>
int main(){
  int i = 1;
  // int j = 1;
  // int k = 1;
  int count = 0;
  for(int i =1;i<=4;i++){
    for(int j = 1;j<=4;j++){
      for(int k = 1;k<=4;k++){
        if(i!=j&&i!=k&&j!=k){
        count++;
        printf("%d %d %d  第%d个\n",i,j,k,count);
      }
      }
    }
  }

  return 0;
}

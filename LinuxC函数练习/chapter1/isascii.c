#include <stdio.h>
#include <ctype.h>
int main(){
  for(int i = 125;i<130;i++){
    if(isascii(i)){
      printf("%c",i);
    }
  }
  printf("\n是%c值",127);
}

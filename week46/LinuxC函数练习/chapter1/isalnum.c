#include <stdio.h>
#include <ctype.h>
int main(){
  char *c = "123c@#FDsP[e?";
  for(int i = 0;c[i]!='\0';i++){
    if(isalnum(c[i])){
      printf("%c",c[i]);
    }
    if(0){
      printf("h");
    }
  }
}

#include <stdio.h>
#include <ctype.h>
int main(){
  char *c = "123c@#FDsP[e?";
  for(int i = 0;c[i]!='\0';i++){
    if(isalpha(c[i])){
      printf("%c",c[i]);
    }
  }
}

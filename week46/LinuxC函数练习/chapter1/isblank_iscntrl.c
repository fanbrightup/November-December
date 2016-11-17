#include <stdio.h>
#include <ctype.h>
int main(){
  char *c = "\n123 c @#F\tDsP[e?";
  for(int i = 0;c[i]!='\0';i++){
    if(iscntrl(c[i])){
      // printf("%d__%d\n",i,c[i]);
    }
    if(iscntrl(127)){
      // printf("h");
    }
  }
  char str = '\b';
  printf("%d",iscntrl(str));
}

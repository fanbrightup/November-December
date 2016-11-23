#include <stdio.h>
int main(int argc,void * argv[]){
  if(argc > 2){
    printf("no to many\n");
    return 0;
  }
  printf("%s",argv[1]);
}

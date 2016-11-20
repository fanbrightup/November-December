#include <unistd.h>
#include <stdio.h>
int main(){
  if(access("./a/",F_OK) == 0){
    printf("yes  yes");
  }else{
    printf("no  no");
  }
}

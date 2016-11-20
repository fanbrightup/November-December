#include <stdio.h>
#include <unistd.h>
int main(){
  char buf[100];
  getcwd(buf,90);
  printf("is %s \n",buf);
  return 0;
}

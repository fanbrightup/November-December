#include <stdio.h>
#include <unistd.h>
#include <dirent.h>
#include <sys/stat.h>
#include <sys/types.h>
int main(){
  char buf[100];
  printf("current working dir:%s",getcwd(buf,90));
  mkdir("/home/try/1",S_IRWXG);
  return 0;
}

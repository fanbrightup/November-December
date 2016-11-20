#include <stdio.h>
#include <string.h>
int main(){
  char *s = "www.okfcm.win";
  char c = '.';
  char *res;
  res = memchr(s,c,strlen(s));
  printf("%c之后是————%s",c,res);
  return 0;
}

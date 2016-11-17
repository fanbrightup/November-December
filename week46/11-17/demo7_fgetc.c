// 单双引号的区别一定要分清楚
#include <stdio.h>
int main(){
  FILE *fp;
  char c;
  fp = fopen("demo7_fgetc.c","a+");
  while((c=fgetc(fp))!=EOF){
    printf("%c",c);
  };
  fclose(fp);
  return 0;
}

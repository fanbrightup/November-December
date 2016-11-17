#include <stdio.h>
int main(){
  // 读取数字数据
	// FILE *fp;
	// fp = fopen("number","r");
  // int new[10];
  // int i = 0 ;
  // while(fscanf(fp,"%d\n",&new[i])==1){
  //   printf("%d\n",new[i]);
  //   i++;
  // };
	// fclose(fp);

  //读取字符串数据
  FILE *fp;
  fp = fopen("test","r");
  char str[1000];
  int i = 0;
  for(;fscanf(fp,"%c\n",&str[i])==1;){
  };
  printf("%c\n",str[0]);
  fclose(fp);
  return 0;
};

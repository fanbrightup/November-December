#include <stdio.h>
#include <stdarg.h>
float avg(int,...);
void show(int,...);
int main(){
  avg(4,1,2,3,4);
  avg(5,1,2,3,4,5);
  show(3,'a','b','c');
  show(4,'a','b','c','d');
}
float avg(int num,...){
  va_list ap;
  va_start(ap,num);
  float sum = 0;
  for(int i = 0;i<num;i++){
    sum +=va_arg(ap,int);
  }
  va_end(ap);
  printf("%.2f\n",sum/num);
}

void show(int num,...){
  va_list ap;
  va_start(ap,num);
  for(int i = 0;i<num;i++){
    printf("%c\t",va_arg(ap,char *));
  }
  printf("\n");
  va_end(ap);
}

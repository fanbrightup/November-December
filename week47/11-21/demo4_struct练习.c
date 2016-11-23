#include <stdio.h>
#include <string.h>
int main(){
  struct student {
    char name[20];
    unsigned short age;
  }stu_1;
  strcpy(stu_1.name,"hello");
  printf("%s\n",stu_1.name);
  printf("%s\n",__FILE__);
  printf("%s\n",__DATE__);
  printf("%s\n",__TIME__);
  printf("%d\n",__LINE__);
  printf("%d\n",__STDC__);
}

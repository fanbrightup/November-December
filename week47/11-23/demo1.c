#include <stdio.h>
int main(int argc, char const *argv[]) {
  // 结构体占用的总字节数
  struct student {
    long id;
    char name[1];
    int age;
  };
  struct student stu_1;
  struct student *stu_ptr;
  struct student *ptr  = &stu_1;
  printf("%d\n",sizeof(stu_1));
  printf("%d\n",sizeof(stu_ptr));
  printf("%d\n",sizeof(ptr));
  return 0;
}

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <string.h>

struct person {
  char *p_name;
  int p_age;
};
// 生成对象
struct person * person_create(char * name,int age){
  struct person * who =(struct person *) malloc(sizeof(struct person));
  who->p_name = strdup(name);
  who->p_age = age;
  return who ;
}
// 销毁对象
void person_destory(struct person *who){
  free(who->p_name);
  free(who);
}
// 打印结构体
void person_print(struct person * who){
  printf("用户名为%s\n",who->p_name);
  printf("用户年龄为%d\n",who->p_age);
  printf("================================\n");
}

// 主函数
int main(int argc, char const *argv[]) {
  struct person * one = person_create("fan_one",22);
  struct person * two = person_create("fan_two",23);
  struct person * three = person_create("fan_four",24);

  person_print(one);
  person_print(two);
  person_print(three);
  person_destory(one);
  person_destory(two);
  person_destory(three);

  return 0;
}

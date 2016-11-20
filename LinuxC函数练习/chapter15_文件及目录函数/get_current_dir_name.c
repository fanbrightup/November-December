#include <stdio.h>
#include <unistd.h>
int main(){
  char *ptr;
  ptr = get_current_dir_name();
  printf("is %s \n",ptr);
  return 0;
}

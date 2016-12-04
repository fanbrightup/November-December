#include <stdio.h>
int main(int argc, char const *argv[],char * envp[]) {
  printf("####  ARGC   ####\n%d\n",argc);
  printf("####  ARGV   ####\n");
  while(*argv)
      printf("%s\n",*(argv++));
  while(*envp)
      printf("%s\n",*(envp++));

  return 0;
}

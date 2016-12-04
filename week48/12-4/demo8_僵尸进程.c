#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>
int main(int argc, char const *argv[])
{
  pid_t pid;
  pid=fork();
  if(pid<0)
    printf("error occurred!\n");
  else if(pid == 0)
    exit(0);
  else
    sleep(15);
    wait(NULL);

  return 0;
}

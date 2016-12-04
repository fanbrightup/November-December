#include <unistd.h>
#include <sys/types.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char const *argv[]) {
  printf("The id is %d\n",getpid());
  exit(0);
  return 0;
}

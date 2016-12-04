#include <stdio.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <unistd.h>
#include <stdlib.h>
int main(int argc, char const *argv[])
{
  int status;
  pid_t pc,pr;
  pc=fork();
  if(pc<0)
    printf("error occurred!\n");
  else if(pc == 0){

    printf("This is child process with pid of %d\n",getpid());
    exit(3);
  }
  else{
    pr=wait(&status);
    if(WIFEXITED(status)){
      printf("the child process %d exit normally.\n",pr);
      printf("the return code is %d.\n",WEXITSTATUS(status));
    }else{
      printf("the child process %d exit abnormally.\n",pr);
    }
    //  如果不wait的话,父进程直接结束,打印出信息,然后10秒后再打印出子进程的信息
    printf("I catched a child process with pid of %d\n",pr);
  }

  return 0;
}

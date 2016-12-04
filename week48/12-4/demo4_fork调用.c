#include <unistd.h>
#include <sys/types.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <errno.h>
#include <string.h>

extern int errno;
int main(int argc, char const *argv[]) {
  char buf[100];
  pid_t cld_pid;
  int fd;
  int status;
    if((fd=open("temp",O_CREAT|O_TRUNC|O_RDWR,S_IRWXU)) == -1)
    {
      printf("open error\n",errno );
      exit(1);
    }
  strcpy(buf,"This is parent process write\n");

  if((cld_pid=fork())==0)
  {
      strcpy(buf,"This is chidl process write");
      printf("11111This is child process\n");
      printf("11111child pid   is %d\n",getpid());
      printf("11111parent pid   is %d\n",getpid());
      write(fd,buf,strlen(buf));
      close(fd);
      exit(0);
  }
  else
  {
      printf("22222This is parent process\n");
      printf("22222child pid   is %d\n",cld_pid);
      printf("22222parent pid   is %d\n",getpid());
      write(fd,buf,strlen(buf));
      close(fd);
  }
  // wait(&status);
  // return 0;
}
// 有wait时
//   11111This is child process
// 11111child pid   is 16425
// 11111parent pid   is 16425
// 22222This is parent process
// 22222child pid   is 16425
// 22222parent pid   is 16424

// 注释掉wait(&status);
// 父进程不等待子进程结束就先结束了
// 22222This is parent process
// 22222child pid   is 17197
// 22222parent pid   is 17196
// 11111This is child process
// 11111child pid   is 17197
// 11111parent pid   is 17197

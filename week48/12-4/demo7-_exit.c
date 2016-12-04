#include <stdio.h>
#include <unistd.h>
int main(int argc, char const *argv[]) {
  printf("output begin \n");
  // 在atom的编译器下不能正常工作,命令行下可以输出第一行,但是第二行因为还在缓冲区,所以未能写入.
  printf("content in buffer");
  _exit(0);
}

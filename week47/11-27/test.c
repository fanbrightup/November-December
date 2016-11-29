#include <stdio.h>
#define NEW(T,N)  (T##N)
int main(int argc, char const *argv[]) {
  /* code */
  // printf("%s\n",add("ab","cd"));
  printf("%s\n",NEW("ab","cd"));
  return 0;
}

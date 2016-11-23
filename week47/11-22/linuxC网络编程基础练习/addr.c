#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <arpa/inet.h>
int main(int argc, char const *argv[]) {
  char addr_p[16];
  struct in_addr addr_n;
  if(inet_pton(AF_INET,"192.168.11.6",&addr_n)==-1){
    perror("fail to convert");
  }
  printf("address:%x\n",addr_n.s_addr);


  if(inet_ntop(AF_INET,&addr_n,&addr_p,sizeof(addr_p))==-1){
    perror("fail to convert");
    exit(1);
  }
  printf("address:%s\n",addr_p);

  return 0;
}

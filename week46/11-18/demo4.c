#include <stdio.h>
#include <netinet/in.h>
int main(){
	unsigned long ip = inet_addr("127.0.0.1");
	printf("%ld\n",ip);
	return 0;
}

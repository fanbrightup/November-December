#include <stdio.h>
#include <string.h>
int main(){
	char *s={'a','b',NULL,'c'};
	char c[] = {'e','f',NULL,'g'};
	printf("%s\n",c);
	int *p = NULL;
	printf("%d\n",p==NULL);
	printf("%d\n",p);
}

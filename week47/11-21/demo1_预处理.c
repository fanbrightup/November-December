#include <stdio.h>
#define ADD(a,b) a+b
// #define MESSAGE "原来的"
int main(){

	printf("%f\n",ADD(1.5,2.3));

	//	如果未定义
	#if !defined (MESSAGE)
	   #define MESSAGE "You wish!"
	#endif

	printf("原来的  %s\n",MESSAGE);
	#ifdef MESSAGE
		#define MESSAGE "新的"
	#endif
	printf("修改后  %s\n",MESSAGE);
	return 0;
}

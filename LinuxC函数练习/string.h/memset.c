#include <stdio.h>
#include <string.h>

int main ()
{
   char str[50];

   strcpy(str,"This is string.h library function");
// 必须要使用ss[]数组才能正确的使用memset，使用*ss不能正常使用     
   char ss[] = "helloworld";
   puts(ss);
   memset(ss,'$',7);
   puts(ss);

   return(0);
}

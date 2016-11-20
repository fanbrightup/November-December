#include <stdio.h>
#include <string.h>

int main ()
{
   const char src[5] = "okf";
   char dest[25];

   printf("Before memcpy dest = %s\n", dest);
   memcpy(dest, src, strlen(src)+1);
   printf("After memcpy dest = %s\n", dest);

   return(0);
}

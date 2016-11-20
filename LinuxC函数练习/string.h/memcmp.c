#include <stdio.h>
#include <string.h>
// 注  小写字母大于大写字母
// memcmp  可以直接出入字符串
int main ()
{
   char str1[15];
   char str2[15];
   int ret;

   memcpy(str1, "abcde", 6);
   memcpy(str2, "abcdE", 6);

   ret = memcmp("fAn", "fan", 5);

   if(ret > 0)
   {
      printf("str1 大于 str2");
   }
   else if(ret < 0)
   {
      printf("str1 小于 str2");
   }
   else
   {
      printf("str1 等于 str2");
   }
   printf("\n%d\n",'e'>'E');
   return(0);
}

#include <stdio.h>
#include <string.h>
int main()
{
  // char full_name[] = {
  //       'Z', 'e', 'd',
  //        ' ', 'A', '.', ' ',
  //        'S', 'h', 'a', 'w', '\0'
  //   };
  //   int areas[] = {10, 12, 13, 14, 20};
  //   char name[] = "Zed";
  //
  //   printf("%d\n ",sizeof(full_name));
  //   printf("%s\n",full_name);
  //   printf("%d\n ",sizeof(areas)/sizeof(areas[0]));
  //   printf("%d\n ",sizeof(full_name));
  //   printf("%d\n ",strlen(full_name));

  char ch[] = {'a','b','c'};
  char *p = ch;
  printf("%d\n ",sizeof(ch));
  printf("%d\n ",sizeof(p));
  printf("%p\n ",ch);
  printf("%p\n ",p);
  printf("%c\n ",ch[0]);
  printf("%c\n ",*(ch+1));

}

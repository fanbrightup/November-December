#include <stdio.h>
int main()
{
FILE *fp;
int c;
fp=fopen("test","r");
while((c=fgetc(fp))!=EOF)
printf("%c",c);
fclose(fp);
return 0;
}

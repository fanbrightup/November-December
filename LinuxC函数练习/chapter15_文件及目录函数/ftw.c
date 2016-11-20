#include <stdio.h>
#include <sys/stat.h>
#include <unistd.h>
#include <ftw.h>
int fn(const char*file,const struct stat *sb,int flag){
  if(flag == FTW_D) printf("%s -- directory\n",file);
  return 0;
}

main(){
  ftw("./sub",fn,500);
}

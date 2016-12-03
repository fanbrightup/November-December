#include <stdio.h>
int toBinary(int num){
  if(num / 2 == 0){
    printf("%d",num % 2);// 最先被打印的
  }else{
   toBinary(num/2);
   printf("%d",num % 2);  // 向栈一样,先进后执行,入栈之后保存状态,如果有变量,
                          //  则等最后入栈的出栈之后,得到未知变量的值,从而层层解出递归结果.
  //  printf("%c",'s');
}
}
int main(int argc, char const *argv[]) {
  toBinary(4);
  printf("\n");

  return 0;
}

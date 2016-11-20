#include <stdio.h>
#include <string.h>
#define true 1
#define false 0
#define  BB int
// 定义结构体
typedef struct Books{
	char title[50];
	char author[50];
	char subject[100];
	int book_id;
}Book;

// 函数声明
void initbook(struct Books *  pBook, char * title,char * author,char * subject,int id);
void printBook(struct Books * book1);


// main函数
int main(){
	Book Book1;
	initbook(&Book1,"fan\'s book","fanbright","art",9999);
	printBook(&Book1);
	BB a = 1;
	FILE * fp;
	fp = fopen("test","w+");
	fprintf(fp,"%d",a);
	fclose(fp);
	return 0;
}



//  函数定义 初始化initbook函数，用于初始化结构体
void initbook(struct Books *  pBook, char * title,char * author,char * subject,int id){
	strcpy(pBook->title,title);
	strcpy(pBook->author,author);
	strcpy(pBook->subject,subject);
	pBook->book_id = id;
}
// 函数定义  格式化输出函数
void printBook(struct Books * book1){

	printf( "Book 1 title : %s\n", book1->title);
	printf( "Book 1 author : %s\n", book1->author);
	printf( "Book 1 subject : %s\n", book1->subject);
	printf( "Book 1 book_id : %d\n", book1->book_id);
}

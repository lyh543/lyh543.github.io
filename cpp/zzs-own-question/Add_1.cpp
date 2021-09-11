#include<stdio.h>

int add(int *x)  //int *x相当于定义指针  x是一个地址 //无返回值的函数   其实应该用void 但是z习惯用 int 
{
	*x=*x+1;     //*x相当于使用指针  *x是一个值 
}

int main()
{
    int x = 1;
    add(&x); 
    printf("%d", x);
}

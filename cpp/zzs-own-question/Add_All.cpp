#include<stdio.h>
int addAll(int* x,int len)  //无返回值的函数   其实应该用void 但是z习惯用 int 
{ 
	for(int i=0;i<len;i++)
		x[i]=x[i]+1;		 
}
int main()
{
    int x[3] = {1,2,3};
    addAll(x,3);
    for(int i = 0; i < 3; i++) printf("%d ", x[i]);
    
    return 0;
}

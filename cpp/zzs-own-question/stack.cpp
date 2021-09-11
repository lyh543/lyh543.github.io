#include<stdio.h>
struct stack
{
	int data[1000000];
	int top;
}s;
int size()
{
	return s.top;
}
int get_top()
{
	return s.data[s.top-1];
}
void push_back(int x)
{
	s.data[s.top]=x;
	s.top++;
}
int pop_back()
{
	s.top--;
	return s.data[s.top];
}
void print_stack()
{
	for(int i=0;i<s.top;i++)
	{
		printf("%d ",s.data[i]);
	}
	printf("\n");
}
int main()
{
	for(int i=0;i<12;i++)
	{
		scanf("%d",&s.data[i]); 
		s.top++;
	}
	print_stack();
	printf("%d\n",pop_back()); 
	for(int i=0;i<11;i++)
	{
		printf("%d ",s.data[i]);
	}
	
	printf("\n%d\n",size());
	printf("%d\n",get_top());
	return 0;
}

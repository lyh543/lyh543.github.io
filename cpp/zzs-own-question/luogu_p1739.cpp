#include<stdio.h>
struct stack
{
	char data[255];
	int top;
}s;
int main()
{
	char a[255];
	scanf("%s",a);
	s.top=0;
	for(int i=0;a[i]!='@';i++)
	{
		if(a[i]=='(')
		{
			s.data[s.top]='(';
			s.top++;
		}
		if(a[i]==')')  s.top--;
		if(s.top<0)
		{
			printf("NO");
			return 0;
		}
	}
	if(s.top==0)
	{
		printf("YES");
		return 0;
	}
	else
	{
		printf("NO");
		return 0;
	}
}

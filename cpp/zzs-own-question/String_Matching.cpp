#include<stdio.h>
#include<string.h>
#include<ctype.h>
#include<stdlib.h>


int toupper1(int ch)
{
	return ch - 32;
}
int main()
{
	char s[100], t[100];
	scanf_s("%s%s", s,100,t,100);
	int len1 = 0, len2 = 0;

	for (int i = 0; s[i] != '\0'; i++)
	{
		len1++;
	}
	len2 = strlen(t);


	for (int i = 0; i <= len1; i++)
	{
		if (s[i] >= 'a'&&s[i] <= 'z')
		{
			s[i]=toupper1(s[i]);
		}
	}
	for (int i = 0; i < len2; i++)
	{
		if (t[i] >= 'a'&&t[i] <= 'z') t[i]= toupper(t[i]);
	}

	int cur = 0;

		for (int j = 0; j < len1; )
		{
			if (t[cur] == s[j])
			{
				cur++;
				j++;
			}
			else
			{
				cur = cur - j + 1;
				j = 0;

				if (len2 - cur < len1)
				{
					printf("%d", -1);
					system("pause");
					return 0;
				}
			}
			if (j == len1)
			{
				printf("%d", cur - len1 + 1);
				system("pause");
				return 0;
			}
		}
}
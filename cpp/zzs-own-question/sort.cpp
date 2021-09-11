#include<stdio.h>
#include<stdlib.h>
int main()
{
	for (int n = 2; n <= 11; n++)
	{
		int a[100];
		for (int i = 1; i < n; i++)
		{
			a[i] = rand() % 23 + 1;
			printf("%d ", a[i]);
		}
		printf("\n");
		for (int i = 1; i < n; i++)
		{
			a[0] = a[i];
			int j;
			for (j = i - 1; a[j] > a[0]; j--)
				a[j + 1] = a[j];
			a[j + 1] = a[0];
		}
		for (int i = 1; i < n; i++)
			printf("%d ", a[i]);
		system("pause");
	}
}
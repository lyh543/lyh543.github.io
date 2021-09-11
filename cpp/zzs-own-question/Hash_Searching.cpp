//Hash函数处理后得到的是下标，不能再对下标进行Hash函数了
#include<stdio.h>
#include<stdlib.h>
int s[10000000];
int t[10000000];
const int mod = 20000159;
int a[mod];

int Hash(int n)
{
	return n % mod;
}
int main()
{
	for (int i = 0; i < mod; i++)  a[i] = -1;
	FILE *fp1;
	int m, n;
	fopen_s(&fp1,"input.txt", "r");
	fscanf_s(fp1, "%d%d", &n,&m);
	int temp, index;
	int div = 1;
	for (int i = 0; i < n; i++)
	{
		fscanf_s(fp1, "%d", &temp);
		index = Hash(temp);
		while(a[index] != -1)
		{
			index = (index + div)%mod;
		}
		a[index] = temp;
	}
	int sum = 0;
	for (int i = 0; i < m; i++)
	{
		fscanf_s(fp1, "%d", &temp);
		index = Hash(temp);
		if (a[index] == temp)
		{
			sum++;
		}
		while(a[index] != temp&&a[index]!=-1)
		{
			index = (index + div)%mod;
			if (a[index] == temp)  sum++;
		}
	}
	
	fclose(fp1);
	printf("%d", sum);
	system("pause");
	return 0;
}
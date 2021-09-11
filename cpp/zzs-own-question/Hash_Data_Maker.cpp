#include <iostream>
#include<unordered_set>
#include<cstdlib>
#include<algorithm>
#include<ctime>
#include<fstream>

using namespace std;

int randMax;

inline int bigRand()
{
	return ((rand() << 15) + rand()) % randMax;
}

int main()
{
	srand(time(NULL));
	long long n = 10, m = 10;
	int ans = 0;
	randMax = min(n * m, (long long)1e9);
	unordered_set<int> s;
	
	ofstream fout("input.txt");
	fout << n << " " << m << endl;
	for (int i = 0; i < n; i++)
	{
		int t = bigRand();
		fout << t << " ";
		s.insert(t);
	}
	fout << endl;
	for (int i = 0; i < m; i++)
	{
		int t = bigRand();
		fout << t << " ";
		if (s.find(t) != s.end())
			ans++;
	}
	fout << endl
		<< "ans = " << ans;
}
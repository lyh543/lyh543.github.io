#include<bits/stdc++.h>
#include<Profileapi.h>
#include<Windows.h>

using namespace std;

struct BigInteger
{
	typedef unsigned long long LL;
	static const int BASE = 100000000;
	static const int WIDTH = 8;
	vector<int> s;

	BigInteger& clean()
	{
		while (!s.back() && s.size() > 1)s.pop_back(); return *this;
	}
	BigInteger(LL num = 0) { *this = num; }
	BigInteger(string s) { *this = s; }
	BigInteger& operator = (long long num)
	{
		s.clear();
		do {
			s.push_back(num % BASE);
			num /= BASE;
		} while (num > 0);
		return *this;
	}
	BigInteger operator + (const BigInteger& b) const
	{
		BigInteger c; c.s.clear();
		for (int i = 0, g = 0; ; i++) {
			if (g == 0 && i >= s.size() && i >= b.s.size())
				break;
			int x = g;
			if (i < s.size()) x = x + s[i];
			if (i < b.s.size()) x = x + b.s[i];
			c.s.push_back(x % BASE);
			g = x / BASE;
		}
		return c;
	}
	BigInteger operator - (const BigInteger& b) const
	{
		BigInteger c; c.s.clear();
		for (int i = 0, g = 0; ; i++)
		{
			if (g == 0 && i >= s.size() && i >= b.s.size())
				break;
			int x = s[i] + g;
			if (i < b.s.size()) x = x - b.s[i];
			if (x < 0) { g = -1; x = x + BASE; }
			else g = 0;
			c.s.push_back(x);
		}
		return c.clean();
	}
	BigInteger operator * (const BigInteger& b) const
	{
		int i, j; LL g;
		vector<LL> v(s.size() + b.s.size(), 0);
		BigInteger c; c.s.clear();
		for (i = 0; i < s.size(); i++)
			for (j = 0; j < b.s.size(); j++)
				v[i + j] = v[i + j] + LL(s[i])*b.s[j];
		for (i = 0, g = 0; ; i++)
		{
			if (g == 0 && i >= v.size()) break;
			LL x = v[i] + g;
			c.s.push_back(x % BASE);
			g = x / BASE;
		}
		return c.clean();
	}
	BigInteger operator / (const BigInteger& b) const
	{
		BigInteger c = *this;
		BigInteger m;
		for (int i = s.size() - 1; i >= 0; i--)
		{
			m = m * BASE + s[i];
			c.s[i] = bsearch(b, m);
			m = m - b * c.s[i];
		}
		return c.clean();
	}
	BigInteger operator % (const BigInteger& b) const
	{
		BigInteger c = *this;
		BigInteger m;
		for (int i = s.size() - 1; i >= 0; i--)
		{
			m = m * BASE + s[i];
			c.s[i] = bsearch(b, m);
			m = m - b * c.s[i];
		}
		return m;
	}
	int bsearch(const BigInteger& b, const BigInteger& m) const
	{
		int L = 0, R = BASE - 1, x;
		while (1)
		{
			x = (L + R) >> 1;
			if (b*x <= m)
			{
				if (b*(x + 1) > m)
					return x;
				else L = x;
			}
			else R = x;
		}
	}
	bool operator < (const BigInteger& b) const
	{
		if (s.size() != b.s.size())
			return s.size() < b.s.size();
		for (int i = s.size() - 1; i >= 0; i--)
			if (s[i] != b.s[i]) return s[i] < b.s[i];
		return false;
	}
	bool operator >(const BigInteger& b) const
	{
		return b < *this;
	}
	bool operator<=(const BigInteger& b) const
	{
		return !(b < *this);
	}
	bool operator>=(const BigInteger& b) const
	{
		return !(*this < b);
	}
	bool operator!=(const BigInteger& b) const
	{
		return b < *this || *this < b;
	}
	bool operator==(const BigInteger& b) const
	{
		return !(b < *this) && !(b > *this);
	}
};

ofstream fout("test.out");
typedef long long testType;
const long long lowerbound = 1, upperbound = 1e8, totalCases = 20, loop = 1;

testType j = 0;
testType low = lowerbound, up = upperbound;

void maintest()
{
	for (testType i = lowerbound; i <= upperbound; i = i + 1)
		j += sqrt(i);
}


int main()
{
	//test for time complexity
	double timesPerSec = 0;
	cout << double(lowerbound) << " ~ " << double(upperbound) << ":" << endl;
	for (int caseN = 0; BigInteger(caseN) < totalCases; caseN++)
	{
		LARGE_INTEGER StartingTime, EndingTime, ElapsedMicroseconds;
		LARGE_INTEGER Frequency;

		QueryPerformanceFrequency(&Frequency);
		QueryPerformanceCounter(&StartingTime);
		
		for (int i = 0; i < loop; i++)
			maintest();

		QueryPerformanceCounter(&EndingTime);

		ElapsedMicroseconds.QuadPart = EndingTime.QuadPart - StartingTime.QuadPart;
		ElapsedMicroseconds.QuadPart *= 1000000;
		ElapsedMicroseconds.QuadPart /= Frequency.QuadPart;

		fout << j << endl;
		double curTimesPerSec = (upperbound - lowerbound + 1) * loop * 1000000.0 / ElapsedMicroseconds.QuadPart;
		cout << ElapsedMicroseconds.QuadPart << "us " << curTimesPerSec << endl;
		if (caseN != 1) //ignore the first case because it has much deviation from the others
			timesPerSec += curTimesPerSec;
	}
	timesPerSec /= totalCases-1;
	cout << endl
		<< "Average: " << timesPerSec << "times/s\n\n";
}
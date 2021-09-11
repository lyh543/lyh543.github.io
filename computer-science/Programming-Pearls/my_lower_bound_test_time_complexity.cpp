#include<bits/stdc++.h>
#include<Profileapi.h>
#include<Windows.h>

using namespace std;

int _lower_bound(int * arr, int n, int x)
{
	int l = 0, r = n;
	while (l <= r)
	{
		//ans exists in [l,r], otherwise return n
		assert(l == 0 || arr[l - 1] < x);
		assert(r == n || arr[r] >= x);
		int m = (l + r) / 2;
		if ((m == 0 || arr[m - 1] < x) && (m == n || arr[m] >= x))
			return m;
		else if (m > 0 && arr[m - 1] >= x)
			r = m - 1;
		else
		{
			assert(m < n && arr[m] < x);
			l = m + 1;
		}
	}
	assert(0);
	return -1;
}

int main()
{

	srand(time(NULL));
	//test for time complexity
	int n, k = 5e6;
	for (int n = 1000; n <= 1e9; n *= 10)
	{
		//cin >> n;
		cout << n << "\t";
		int * arr = new int[n];
		for (int i = 0; i < n; i++)
			arr[i] = rand();
		sort(arr, arr + n);

		LARGE_INTEGER StartingTime, EndingTime, ElapsedMicroseconds;
		LARGE_INTEGER Frequency;

		QueryPerformanceFrequency(&Frequency);
		QueryPerformanceCounter(&StartingTime);

		for (int i = 0; i < k; i++)
		{
			int temp = rand();
			int ans = _lower_bound(arr, n, temp);
			assert((ans == 0 || arr[ans - 1] < temp) && (ans == n || arr[ans] >= temp));
		}


		QueryPerformanceCounter(&EndingTime);

		ElapsedMicroseconds.QuadPart = EndingTime.QuadPart - StartingTime.QuadPart;
		ElapsedMicroseconds.QuadPart *= 1000000;
		ElapsedMicroseconds.QuadPart /= Frequency.QuadPart;

		cout << "tot: " << ElapsedMicroseconds.QuadPart << "us\tper: " << ElapsedMicroseconds.QuadPart * 1.0 / k << "us" << endl;
	}
}

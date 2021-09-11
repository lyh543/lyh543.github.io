#include<bits/stdc++.h>

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
	int n = 10, k = 10;

	int * arr = new int[n];

	for (int i = 0; i < n; i++)
		arr[i] = k;
	assert(_lower_bound(arr, n, k-1) == 0);
	assert(_lower_bound(arr, n, k) == 0);
	assert(_lower_bound(arr, n, k+1) == n);

	for (int i = 0; i < n; i++)
		arr[i] = k * i;
	for (int i = 0; i < n; i++)
	{
		assert(_lower_bound(arr, n, k * i - 1) == i);
		assert(_lower_bound(arr, n, k * i) == i);
		assert(_lower_bound(arr, n, k * i + 1) == i+1);
	}

	assert(_lower_bound(arr, 0, k-1) == 0);
	assert(_lower_bound(arr, 0, k) == 0);
	assert(_lower_bound(arr, 0, k+1) == 0);
}
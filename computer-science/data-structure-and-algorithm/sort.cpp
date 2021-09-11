#include<iostream>
#include<vector>
#include<cassert>
#include<ctime>
#include<cstdlib>
#include<algorithm>
#include<queue>

using namespace std;

//简单插入排序，但是带有 dist 参数，可以被希尔排序调用
template <class T>
void simple_insertion_sort(vector<T>& Arr, int l, int r, int dist)
{
	for (int i = l; i < r; i += dist) //现在开始移动原来位置为 i 的元素
	{
		for (int j = i; j - dist >= l; j -= dist)
		{
			if (Arr[j - dist] > Arr[j])
				swap(Arr[j - dist], Arr[j]);
			else
				break;
		}
	}
}

template <class T>
void simple_insertion_sort(vector<T>& Arr, int l, int r)
{
	//不使用默认参数的原因
	//是因为即使使用默认参数，使用函数指针时参数列表还是要写三个
	simple_insertion_sort(Arr, l, r, 1);
}

//希尔排序
template <class T>
void shell_sort(vector<T>& Arr, int l, int r)
{
	//希尔序列选择 Hibbard 序列 2^i-1
	vector<int> distArr;
	for (int i = log2(Arr.size()); i >= 1; i--)
	{
		distArr.push_back((1 << i) - 1);
	}

	for (int i = 0; i < distArr.size(); i++)
	{
		int dist = distArr[i];
		for (int j = 0; j < dist; j++)
		{
			simple_insertion_sort(Arr, j, r, dist);
		}
	}
}

//快速排序（枢纽为三者取中法）
template <class T>
void quick_sort(vector<T>& Arr, int l, int r)
{
	if (r <= l + 1)
		return;
	int pivot = Arr[l];
	int i = l + 1, j = r - 1;
	while (i < j)
	{
		while (i < j && Arr[i] <= pivot)
			i++;
		while (i < j && Arr[j] >= pivot)
			j--;
		swap(Arr[i], Arr[j]);
	}
	if (Arr[i] <= pivot)
		i++;
	swap(Arr[i - 1ll], Arr[l]); //要让 pivot 即 Arr[l] 与一个小于他的数交换，于是需要判断 a[i] 是大于它还是小于它
	quick_sort(Arr, l, i - 1);
	quick_sort(Arr, i, r);
}

//归并排序
template <class T>
void merge_sort(vector<T>& Arr, int l, int r)
{
	if (l + 1 >= r)
		return;
	int mid = (l + r) / 2;
	merge_sort(Arr, l, mid);
	merge_sort(Arr, mid, r);

	vector<T> tempArr;
	for (int i = l; i < mid; i++)
	{
		tempArr.push_back(Arr[i]);
	}

	int i = 0, j = mid, cur = l;
	while (i != tempArr.size() && j != r)
	{
		assert(cur < r);
		if (tempArr[i] >= Arr[j])
		{
			Arr[cur] = Arr[j];
			cur++, j++;
		}
		else
		{
			Arr[cur] = tempArr[i];
			cur++, i++;
		}
	}
	while (i != tempArr.size())
	{
		Arr[cur] = tempArr[i];
		cur++, i++;
	}
	assert(cur <= r);
	return;
}

//堆排序
namespace heap
{
	//下标是从 0 开始的,所以 1 的左儿子是 3，右儿子是 4
	inline int father(int i) { return i == 0 ? -1 : (i - 1) / 2; }
	inline int leftson(int i) { return i * 2 + 1; }
	inline int rightson(int i) { return i * 2 + 2; }

	template <class T>
	void max_heapify(vector<T>& Arr, int i, int size) //size 参数是堆的大小，在堆排序过程中，堆的大小不一直等于数组的大小
	{
		while (i < size)
		{
			int l = leftson(i), r = rightson(i), largest;
			if (l < size && Arr[i] < Arr[l])
				largest = l;
			else
				largest = i;
			if (r < size && Arr[largest] < Arr[r])
				largest = r;

			if (largest == i)
				break;
			else
			{
				swap(Arr[i], Arr[largest]);
				i = largest;
			}
		}
	}

	template <class T>
	void build_max_heap(vector<T>& Arr)
	{
		for (int i = Arr.size() - 1; i >= 0; i--)
		{
			max_heapify(Arr, i, Arr.size());
		}
	}

	template <class T>
	class priority_queue //为突出算法核心并保持代码简洁，不进行异常情的检查
	{
	private:
		vector<T> Arr;
	public:
		int size()
		{
			return Arr.size();
		}
		void push(const T val)
		{
			Arr.push_back(val);
			for (int i = Arr.size() - 1; i >= 0; i = father(i))
			{
				max_heapify(Arr, i, Arr.size());
			}
		}
		T top()
		{
			return Arr[0];
		}
		void pop()
		{
			swap(Arr[0], Arr[Arr.size() - 1]);
			Arr.pop_back();
			max_heapify(Arr, 0, Arr.size());
		}

		int testModule(int operations = 1e8)
		{

			srand(time(0));
			
			std::priority_queue<T> pq2; //使用标准的优先队列进行随机操作对比

			for (int i = 1; i < rand() % 100; i++)
			{
				int temp = rand() % 100;
				this->push(temp);
				pq2.push(temp);
				assert(pq2.size() == this->size() && (pq2.size() == 0 || pq2.top() == this->top()));
			}

			for (int i = 1; i <= operations; i++)
			{
				if (rand() % 2 == 0 || size() == 0)
				{
					int temp = rand() % 100;
					this->push(temp);
					pq2.push(temp);
				}
				else
				{
					this->pop();
					pq2.pop();
				}
				assert(pq2.size() == this->size() && (pq2.size() == 0 || pq2.top() == this->top()));

				if (i % (operations/100) == 0)
					cout << i << " operations accepted.\n";
			}

			cout << endl;
			return 0;
		}
	};
}

template <class T>
void heap_sort(vector<T>& Arr, int l, int r)//非递归排序，不需要 l, r 参数，但为了统一，还是设定了这个参数
{
	using namespace heap;
	//先将数组调整为堆
	build_max_heap(Arr);

	for (int i = Arr.size() - 1; i > 0; i--)
	{
		swap(Arr[i], Arr[0]);
		max_heapify(Arr, 0, i);
	}
}

template <class T>
bool Sorted(vector<T> ArrOrigin, vector<T>& Arr2)
{
	/*for (int i = 1; i < Arr.size(); i++)
		if (Arr[i] < Arr[i - 1ll])
			return false;
	return true;*/
	sort(ArrOrigin.begin(), ArrOrigin.end());
	return ArrOrigin == Arr2;
}

void testModule(
	void (* sort_function)(vector<int> &, int, int), 
	int mode) 
{
	//只测试正确性，不测试速度
	// mode == 1 表示自动测试（输出测试数组），0表示自动测试（不输出测试数组），-1 表示执行指定序列
	if (mode == 0)
		cout << "testing...\n";
	srand((unsigned int)time(0));
	for (int n = 1; n < 1e4; n++)
	{
		if (mode == -1)
			cin >> n;
		for (int t = 1; t <= 10; t++) //每种长度的数组测试 10 组
		{
			vector<int> Arr;
			for (int i = 1; i <= n; i++)
			{
				if (mode == -1)
				{
					int temp;
					cin >> temp;
					Arr.push_back(temp);
				}
				else
				{
					Arr.push_back(rand() % n);
					//Arr.push_back(10 - i);
				}
			}

			if (mode == 1)
			{
				for (int i = 0; i < n; i++)
					cout << Arr[i] << " ";
				cout << endl;
			}

			vector<int> Arr2 = Arr;
			sort_function(Arr2, 0, n);

			if (!Sorted(Arr, Arr2))
			{
				cout << "error\n";
				system("pause");
			}
			if (abs(mode) == 1)
			{
				for (int i = 0; i < n; i++)
					cout << Arr2[i] << " ";
				cout << endl;
				break;
			}
		}
		if (mode == -1)
			break;
		if (mode == 1)
		{
			system("pause");
			cout << endl;
		}
		if (n % 100 == 0)
		{
			cout << "Array length " << n - 99 << " - " << n << ": Accepted.\n";
		}
	}
}

int main()
{
	int mode;
	cout << "Please input test mode: \n"
		<< "1: auto test and show arrays\n"
		<< "0: auto test and not show arrays\n"
		<< "-1: input size and arrays then test\n";
	cin >> mode; // 1 表示自动测试（输出测试数组），0表示自动测试（不输出测试数组），-1 表示执行指定序列
	testModule(heap_sort, mode);
}
#include<bits/stdc++.h>
#include<Profileapi.h>
#include<Windows.h>

using namespace std;

inline void print(char c, int n)
{
	for (int i = 0; i < n; i++)
		cout << c;
}

int main()
{
	print('-', 20);
	print('\n', 4);
	cout << "       Colors" << endl
		<< "    1. White & Green" << endl
		<< "    2. Red & Grey" << endl
		<< "    3. White & Black" << endl
		<< "    4. White & Blue" << endl
		<< endl
		<< "    this is a colorful text.";

	HANDLE handle = GetStdHandle(STD_OUTPUT_HANDLE);
	COORD arrowCoord = { 0,5 };

	CONSOLE_SCREEN_BUFFER_INFO sbinfo;
	GetConsoleScreenBufferInfo(handle, &sbinfo);
	int defaultColor = sbinfo.wAttributes;

	SetConsoleCursorPosition(handle, arrowCoord);
	cout << "->";

	int choice = 1;

	for (;;)
	{
		const int choiceColor[5] = { 0,0x7a,0x48,0x70,0x71 };
		const COORD textCoord = { 4,10 };
		/*
		0 = Black       8 = Gray
		1 = Blue        9 = Light Blue
		2 = Green       A = Light Green
		3 = Aqua        B = Light Aqua
		4 = Red         C = Light Red
		5 = Purple      D = Light Purple
		6 = Yellow      E = Light Yellow
		7 = White       F = Bright White
		*/
		if (GetKeyState(VK_RETURN) < 0)
		{
			SetConsoleTextAttribute(handle, choiceColor[choice]);
			SetConsoleCursorPosition(handle, textCoord);

			cout << "this is a colorful text.";

			SetConsoleTextAttribute(handle, defaultColor);
			SetConsoleCursorPosition(handle, arrowCoord);
		}
		else
		{
			int choiceAdd = 0;
			if (GetKeyState(VK_UP) < 0 && choice != 1)
			{
				choiceAdd = -1;
			}
			else if (GetKeyState(VK_DOWN) < 0 && choice != 4)
			{
				choiceAdd = 1;
			}
			SetConsoleCursorPosition(handle, arrowCoord);
			cout << "  ";
			choice += choiceAdd;
			arrowCoord.Y += choiceAdd;
			SetConsoleCursorPosition(handle, arrowCoord);
			cout << "->";
			Sleep(100); //以防一次按键被 GetKeyState() 识别两次
		}
	}


}
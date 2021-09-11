//实现一个单向链表 
#include<stdio.h>
#include<stdlib.h>
struct node
{
	int data;
	struct node *next;
}*L,*p,*q,*t;   //需要加*吗


void create_linklist()
{
	L=(struct node*)malloc(sizeof(struct node));
	L->next=NULL;
	t=L;
}
 
void push_back(int x)
{
	p=(struct node*)malloc(sizeof(struct node));
	p->data=x;
	t->next=p;  //t为尾结点（这是一开始要记录的吧） ks在函数里hx不大对 (这里的t能被当成是原链表里的吗) 
	t=p;
	t->next=NULL;
}

int size()
{
	int length=0;
	p=L->next;
	while(p)
	{
		length++;
		p=p->next;
	}
	return length;
}

node * get_head()
{
	return L;
}

void insert(node * posi, int x)
{
	p=L;
	while(p != posi && p)
	{
		p=p->next;
	}
	if(!p)
		printf("不存在posi结点.\n");
	q=(node*)malloc(sizeof(node*));
	q->data=x;
	q->next=p->next;
	p->next=q;
}

void delete_node(node * posi)
{
	p=L;
	while(p->next!=posi)
	{
		p=p->next;
	}
	p->next=p->next->next;
	free(posi);
}

void pop_back()
{
	delete_node(t);
}

void print_linked_list()
{
	p=L->next;
	while(p)
	{
		printf("%d  ",p->data);
		p=p->next;
	}
}

node* find(int x)
{
	p=L->next;
	while(p && p->data!=x)
	{
		p=p->next;
	}
	if(!p)  printf("链表中没有值为%d的结点\n",x);
	return p;
}



void push(int x)
{
	push_back(x);
}

void print_stack()
{
	print_linked_list();
}

int top()
{
	return t->data;
}

int pop()
{
	int m=t->data;
	pop_back();
	return m;
}
int main()
{
	create_linklist();
//	for (int i = 1; i <= 10; i++)
//		push_back(i);
//	print_linked_list();
//	printf("\n%d\n",size());
//	insert(find(3),5);
//	print_linked_list();
//	printf("\n%d\n",size());
//	delete_node(find(4));
//	print_linked_list();
//	printf("\n%d\n",size());
//	pop_back();
//	print_linked_list();
//	printf("\n%d\n",size());
	for(int i=1;i<=10;i++)
		push(i);
	print_stack();
	printf("\n");
	top();
	print_stack();
	printf("\n");
	pop();
	print_stack();
}

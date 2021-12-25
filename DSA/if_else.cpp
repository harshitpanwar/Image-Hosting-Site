#include<iostream>
using namespace std;

int main()
{

    cout << "Conditional Statement : ";

    int saving;
    cin >> saving;

    if(saving > 5000)
    {
        cout << "Ok Neha\n";
        if(saving > 10000)
        {
            cout << "Let's plan a roadtrip\n";
        }
        else
        {
            cout << "Let's go for shopping";
        }
    }
    else if (saving > 2000)
    {
        cout << "Ok Rashmi\n";
        if (saving > 3000)
        {
            cout << "Let's go for a candle light dinner";
        }
        else
        {
            cout << "Let's go to the nearby park or lake";
        }
    }
    else
    {
        cout << "Friends :)\n";
    }

cout << "Find The Largest Number : "

    int a, b, c;
    cin >> a >> b >> c;

    if(a > b)
    {
        if(a > c)
        {
            cout << "A is the largest number";
        }
    }
    else if (b > c)
    {
        cout << "B is the largest number";
    }
    else
    {
        cout << "C is the largest number";
    }
    return 0;
}
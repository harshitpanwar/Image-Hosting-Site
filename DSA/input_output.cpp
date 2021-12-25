#include<iostream>
using namespace std; //If we are using namespace std then no need to use "std :: cout"

int main()
{
    std :: cout << "Hello\nWorld\n"; //No need to use "std :: cout" as we have already imported namespace std in the start

    int amount_mom;
    cin >> amount_mom;
    //cout << "Enter the amount given by Mom : " << cin << amount_mom << endl;???

    int amount_dad;
    cin >> amount_dad;

    int sum = amount_mom + amount_dad;
    cout << sum;

    return 0;
}
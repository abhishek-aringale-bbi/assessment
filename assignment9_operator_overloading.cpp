#include <iostream>
#include <bits/stdc++.h>
using namespace std;

class Complex{
    private:
        int real,imag;
    public:
        Complex(int r=0,int i=0){
            real=r;
            imag=i;
        }
        
    Complex operator + (Complex c)
    {
        Complex temp;
        temp.real = real + c.real;
        temp.imag = imag + c.imag;
        return temp;
    }
    void print()
    {
        cout<<real<<"+i"<<imag<<endl;
    }
};

int main()
{
    Complex c1(1,2),c2(2,3);
    Complex c3=c1+c2;
    c3.print();

    return 0;
}

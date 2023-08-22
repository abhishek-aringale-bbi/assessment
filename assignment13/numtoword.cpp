#include <iostream>
#include<bits/stdc++.h>
using namespace std;

vector<string>str1,str2;
string x(int n, string st){
    
    string s;
    if(n>19){
        s+=str2[n/10] + str1[n%10];
    }
    else{
        s+=str1[n];
    }
    
    if(n!=0){
    s+=st;
    }
    return s;
}

int main()
{
    
    int num=13;
    
    str1={" ","one ", "two ", "three ", "four ","five ", "six ", "seven ", "eight ","nine ", "ten ", "eleven ", "twelve ",
                 "thirteen ", "fourteen ", "fifteen ","sixteen ", "seventeen ", "eighten ","nineteen "};
                 
    str2={" "," ","twenty ", "thirty ", "forty ","fifty ", "sixty ", "seventy ", "eighty ","ninety "};
    

    vector<pair<int,string>>v={{10000000,"crore "},{100000,"lakh "},{1000,"thousand "}
                                
    };
    string ans;
    for(int i=1;i<1000;i=i+3){
        num=i;
        if(num>999){
            for(int i=0;i<v.size();i++)
            {
                int n=num/v[i].first;
                // cout<<"n1: "<<n<<" ";
                n=n%100;
                // cout<<n<<" ";
                ans+=x(n,v[i].second);
                // cout<<ans<<endl;
                // num=num%100;
            }
            cout<<ans<<" ";
            int temp=(num/100)%10;
            if(temp!=0){
                cout<<str1[temp]<<"hundred ";
            }
            
            int temp2=(num/10)%10;
            if(temp2==1){
                temp2=num%100;
                cout<<str1[temp2];
            }
            // cout<<"temp2: "<<temp2<<endl;
            if(temp2!=0 && temp2!=1)
            {
                cout<<str2[temp2]<<" ";
            }
            int temp3=num%10;
            if(temp3!=0){
                cout<<str1[temp3];
            }
        }
        else{
            cout<<i<<": ";
            int temp=(num/100)%10;
            // cout<<temp<<endl;
            if(temp!=0){
                cout<<str1[temp]<<"hundred ";
            }
            
            int temp2=(num/10)%10;
            int flag=0;
            if(temp2==1){
                flag=1;
                temp2=num%100;
                cout<<str1[temp2];
            }
            // cout<<"temp2: "<<temp2<<endl;
            else if(temp2!=0 && temp2!=1)
            {
                cout<<str2[temp2]<<" ";
            }
            // cout<<"xx"<<endl;
            if(flag==0){
                int temp3=num%10;
                if(temp3!=0){
                    cout<<str1[temp3];
                }
            }
        }
        cout<<endl;
    }
    return 0;
}

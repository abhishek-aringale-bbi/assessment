#include <iostream>
#include<bits/stdc++.h>
using namespace std;

int main()
{
    vector<int>v={8,1,2,2,3};
    int n=v.size();
    vector<int>ans;
    for(int i=0;i<n;i++)
    {
        int ct=0;
        for(int j=0;j<n;j++)
        {
            if((i!=j) && (v[i]>v[j]))
            {
                ct++;
            }
            
        }
        ans.push_back(ct);
    }
    for(auto x:ans)
    {
        cout<<x<<" ";
    }
    return 0;
}

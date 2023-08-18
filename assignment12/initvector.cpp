#include <iostream>
#include<bits/stdc++.h>
using namespace std;

int main()
{
    string str="EJLGNAGS9GLI87RLW8RDO460CUZD8103";
    string s1=str.substr(0,str.size()-4);
    string s2=str.substr(str.size()-4,4);
    vector<string>ans;
    int pos=0;
    for(int i=0;i<4;i++)
    {
        // cout<<s2[i]-'0'<<endl;
        for(int j=0;j<s2[i]-'0';j++){
            pos++;
            continue;
        }
        ans.push_back(s1.substr(pos,4));
        // ans.push_back(s1.substr(pos,8));
        pos+=4;
    }
    cout<<ans[3]<<ans[2]<<ans[1]<<ans[1]<<endl;
    return 0;
}

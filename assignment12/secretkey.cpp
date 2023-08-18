#include <iostream>
#include<bits/stdc++.h>
using namespace std;

int main()
{
    string str="2TZICININJSNACETOP7T8N4FZEULH3DJKZH7PDLP3C54JJKDOTUIPEGO8097";
    string s1=str.substr(0,str.size()-4);
    string s2=str.substr(str.size()-4,4);
    string ans="",temp;
    int n1=s1.size();
    int pos=0;
    for(int i=0;i<4;i++)
    {
        // cout<<s2[i]-'0'<<endl;
        for(int j=0;j<s2[i]-'0';j++){
            pos++;
            continue;
        }
        ans+=s1.substr(pos,8);
        // ans.push_back(s1.substr(pos,8));
        pos+=8;
    }
    cout<<ans<<endl;
    return 0;
}

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int main()
{
    // vector<vector<int>>matrix;
    
    // for(int i=0;i<3;i++)
    // {
    //     for(int j=0;j<3;j++)
    //     {
    //         matrix[i].push_back()
    //     }
    // }
    
    vector<vector<char>> matrix
    {
        {'o', 'x', 'o'},
        {'o', 'o', 'x'},
        {'o', 'x', 'x'}
    };
    
    int flag1=0,flag2=0,flag3=0,flag4=0,flag5=0,flag6=0;
    int n=matrix[0].size();
    int a=0;
    for(int i=0;i<n;i++)
    {
        if(((matrix[i][a]==matrix[i][a+1]) && (matrix[i][a+1]==matrix[i][a+2]) && matrix[i][a]!=' ') )
        {
            cout<<matrix[i][a]<<endl;
            flag1=1;
        }
        else if(matrix[i][a]==' ' || matrix[i][a+1]==' ' || matrix[i][a+2]==' ' )
        {
            cout<<"pending"<<endl;
            flag2=1;
        }
        else if((matrix[a][i]==matrix[a+1][i]) && (matrix[a+1][i]==matrix[a+2][i]) && matrix[a][i]!=' ')
        {
            cout<<matrix[a][i]<<endl;
            flag3=1;
        }
        else if(matrix[a][i]==' ' || matrix[a+1][i]==' ' || matrix[a+2][i]==' ' )
        {
            cout<<"pending"<<endl;
            flag4=1;
        }
    }
    
    if(matrix[0][0]==matrix[1][1]==matrix[2][2] )
    {
        flag5=1;
        if(matrix[0][0]=='o')
        {
            cout<<"O"<<endl;
        }
        else if(matrix[0][0]=='x')
        {
            cout<<"x"<<endl;
        }
    }
    else if(matrix[0][2]==matrix[1][1]==matrix[2][0] )
    {
        flag6=1;
        if(matrix[0][2]=='o')
        {
            cout<<"O"<<endl;
        }
        else if(matrix[0][2]=='x')
        {
            cout<<"x"<<endl;
        }
    }
    if(!flag1 && !flag2 && !flag3 && !flag4 && !flag5 && !flag6){
    cout<<"draw"<<endl;
    }
    
    
    return 0;
}

#include <iostream>
#include<bits/stdc++.h>
using namespace std;


    vector<vector<int>> consmatrix(vector<int>rowsum,vector<int>colsum)
    {
        int rows=rowsum.size();
        int cols=colsum.size();
        
        vector<vector<int>> matrix(rows,vector<int>(cols,0));
        
        for(int i=0;i<rows;i++)
        {
            for(int j=0;j<cols;j++)
            {
                matrix[i][j]=min(rowsum[i],colsum[j]);
                rowsum[i]-=matrix[i][j];
                colsum[j]-=matrix[i][j];
            }
        }
        return matrix;
    }

int main()
{
    int c;
    cin>>c;
    vector<int>rowsum={3,8};
    vector<int>colsum={4,7};

    vector<vector<int>>matrix =consmatrix(rowsum,colsum);
    
    for(auto row:matrix)
    {
        for(int x:row)
        {
            cout<<x<<" ";
        }
        cout<<endl;
    }
    
    return 0;
}

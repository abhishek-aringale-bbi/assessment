#include <iostream>
#include<bits/stdc++.h>

using namespace std;

class Vehicle{
    protected:
        string make;
        string model;
    public:
        Vehicle(string make,string model)
        {
            make=make;
            model=model;
        }
        
        string get_make(){
            return make;
        }
        string get_model(){
            return model;
        }
        virtual void display_info()=0;
};

class Car:public Vehicle{
    private:
        string fuel_type;
    
    public:
        Car(string make,string model,string fuel_type):Vehicle(make,model), fuel_type(fuel_type)
        {
            // make=make;
            // model=model;
            // fuel_type=fuel_type;
        }
        string get_fuel_type(){
            return fuel_type;
        }
        void display_info(){
            cout<<"fuel_type: "<<fuel_type<<endl;
        }
        
};
class Motorcycle: public Vehicle{
    private:
        string engine_capacity;
    
    public:
        Motorcycle(string make,string model,string engine_capacity):Vehicle(make,model), engine_capacity(engine_capacity)
        {
            // make=make;
            // model=model;
            // engine_capacity=engine_capacity;
        }
        string get_engine_capacity(){
            return engine_capacity;
        }
        void display_info(){
            cout<<"engine_capacity: "<<engine_capacity<<endl;
        }
};

int main()
{
    Car c("hudai","sx","petrol");
    Motorcycle m("suzuki","gixxer","155");
    
    c.display_info();
    cout<<c.get_fuel_type();
    cout<<endl;
    m.display_info();
    cout<<m.get_engine_capacity();
    return 0;
}

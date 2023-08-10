#include <iostream>
#include <bits/stdc++.h>

using namespace std;

class Human{
    // protected:
    //     string name;
    //     int hp;
    //     int attack;
    
    public:
    string name;
        int hp;
        int attack;
        Human(string name,int hp,int attack):name(name),hp(hp),attack(attack){
            
        }
        
        void take_damage(int damage){
            hp-=damage;
            if(hp<0){
                hp=0;
            }
        }
        
        bool is_alive(){
            return hp>0;
        }
        
        void attack_target(Human& target)
        {
            target.take_damage(attack);
        }
        
        string get_name(){
            return name;
        }
};

class Hero:public Human{
    public:
        Hero(string name, bool high_iq=false):Human(name,50,10)
        {
            if(high_iq){
                attack=attack+5;
            }
        }
};

class Monster:public Human{
    public:
        Monster(string name, bool big_body=false):Human(name,50,10)
        {
            if(big_body){
                hp=hp+5;
            }
        }
};

void game(vector<Hero> heros,vector<Monster> monster)
{
    // srand(time(nullptr));
    while(!heros.empty() && !monster.empty()){
        int heroIndex=rand()%heros.size();
        int monsterIndex= rand()%monster.size();
        
        Hero& hero=heros[heroIndex];
        Monster& monsters=monster[monsterIndex];
        
        hero.attack_target(monsters);
        
        if(monsters.is_alive()){
            monsters.attack_target(hero);
            // cout<<monster.get_name()<<" "<<monster.get_name()
        }
        
        if(!hero.is_alive()){
            heros.erase(heroIndex+heros.begin());
        }
        
        if(!monsters.is_alive()){
            monster.erase(monsterIndex+monster.begin());
        }
    }
    
    if(!heros.empty()){
        cout<<"hero team win"<<endl;
    }
    else{
        cout<<"monster team win"<<endl;
    }
}

int main()
{
    vector<Hero>heros={Hero("hero1",false),Hero("hero2",false),Hero("hero3",true)};
    vector<Monster>monsters={Monster("Monster1",true),Monster("Monster2",false),Monster("Monster3",true)};
    game(heros,monsters);
    return 0;
}

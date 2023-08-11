class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    introduce(){
        console.log(`my name is ${this.name}.i am ${this.age} years old.i am ${this.gender}`);
    }

}

class Student extends Person {
    constructor(name, age, gender, studentid) {
        super(name, age, gender);
        this.studentid = studentid;
    }
    
    introduce() {
    super.introduce();
    console.log(`my id is ${this.studentid}.`);
    }
}

class Teacher extends Person{
    constructor(name,age,gender,subject){
        super(name,age,gender);
        this.subject=subject;
    }

    introduce(){
        super.introduce();
        console.log(`i teach ${this.subject}`)
    }
}


const person1=new Person("abhishek",22,"male");
const student = new Student("abhi", 20, "male", "1004");
const teacher= new Teacher("xyz",33,'male','maths');

person1.introduce();

student.introduce();

teacher.introduce();

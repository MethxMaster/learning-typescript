
// class
class Employee{

    //properties
    readonly id:number;     //read-only
    name:string;
    department:string;
    salary:number;
    //access modifier (more example)
    public skill1:string
    private skill2:string   //private only can change the value inside class

    //Reducing format by declare property directly into the constructor
    // constructor(public id:number, public name:string, public department:string, public salary:number, public skill1:string, private skill2:string){}
    constructor(id:number, name:string, department:string, salary:number, skill1:string, skill2:string){
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill2 = 'money management'

        //console.log(`${this.name}`)
    }
    public info(){
        console.log(`id : ${this.id} name : ${this.name} department : ${this.department} salary : ${this.salary} skill : ${this.skill2}`)
    }
    //getter
    // public getSalary():number{
    //     return this.salary;
    // }
    get Salary():number{
        return this.salary
    }


    //setter
    // public setSalary(newSalary:number){
    //     this.salary = newSalary;
    // }
    set Salary(newSalary:number){
        this.salary = newSalary;
    }
}

class IT extends Employee{

}

//object
const emp3 = new Employee(20000,'Max','Data analyst',50000,'money1','money2')
const emp4 = new Employee(20001,'Sor','Web developer',70000,'it','internet')
console.log(emp3)
emp3.salary = 65000
// emp3.id = 20001      ->      cannot do this becase "read-only"
console.log(emp3)
emp3.info()
emp4.info()

emp3.Salary = 100
emp3.info()
console.log(emp3.Salary)

const emp5 = new IT(20002,'Meth','Developer',45000,'money1','money2')
console.log(emp5)
emp5.info()


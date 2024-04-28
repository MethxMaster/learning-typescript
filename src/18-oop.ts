
// class
class Employee{

    //protected modifier
    protected company:string = 'tesm';

    //properties
    readonly id:number;     //read-only
    name:string;
    department:string;
    protected salary:number;
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



//inheritance class ------------------------------------------------------------------- 
class IT extends Employee{

}

class Account extends Employee{
    constructor(id:number,name:string){
        super(id,name,'account',12000,'money101','money102')
        console.log(`test call protected : ${this.company}`)
        console.log(`test call public : ${this.salary}`)
        console.log(`test call protected : ${this.skill1}`)
    }
}

//Static -> is can call directly to the class , it doesnt need to call via object --------------
class Company{
    public static cName:string = 'EGAT';
    static showInfo(){
        console.log(`this is ${this.cName}`)
    }
}


//Abstract --------------------------------------------------------------------------------------
// classes will get extend from mother abstract class only "a class"
abstract class mainClass{
    protected mainParam:string = 'params from main';
    abstract func():void    //Abstract method
}
class subClass extends mainClass{
    func(){
        console.log(`Hi from sub class (using abstract method) + ${this.mainParam}`)
    }
}

//interface ------------------------------------------------------------------------------------
// Class can get interface more than 1
interface dataPattern1{
    data1:string,
    data2:number,
    func():void
}
interface dataPattern2{
    data3:boolean,
}
class classExampleInterface implements dataPattern1,dataPattern2{
    data1:string = 'property from interface 1'
    data2:number = 200
    data3:boolean
    constructor(inputData3:boolean){
        this.data3 = inputData3
    }
    func():void{
        console.log(`test : ${this.data1} ${this.data2}`)
    }
}






//object
const emp3 = new Employee(20000,'Max','Data analyst',50000,'money1','money2')
const emp4 = new Employee(20001,'Sor','Web developer',70000,'it','internet')
console.log(emp3)
// emp3.id = 20001      ->      cannot do this becase "read-only"
console.log(emp3)
emp3.info()
emp4.info()

emp3.Salary = 100
emp3.info()
console.log(emp3.Salary)

const emp5 = new IT(20002,'Meth','Developer',45000,'money1','money2')   //Use extends class - inheritance class
console.log(emp5)
emp5.info()

const emp6 = new Account(20002,'Meji')    //Use super
console.log(emp6)
emp6.info()

//static test
console.log(Company.cName)
Company.showInfo()

//abstract method
const testAbstract = new subClass()
testAbstract.func()

//interface
const testInterface = new classExampleInterface(true)
console.log(testInterface)
testInterface.func()

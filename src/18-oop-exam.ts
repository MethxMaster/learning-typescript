class CompanyExam{
    public static cName:string = 'EGAT'
    public static employeeList:EmployeeClass[] = []
    static introduce():void{
        console.log(`company : ${this.cName}`)
    }
}
abstract class patternData{
    readonly id:number
    name:string
    private salary:number
    constructor(id:number,name:string,salary:number){
        this.id = id
        this.name = name
        this.salary = salary
    }
    abstract report():void
}
interface PatternReport{
    workYear:number
    reportincome():void
}
class EmployeeClass extends patternData implements PatternReport{
    workYear:number 
    inputSalary:number
    constructor(id:number,name:string,inputSalary:number,workYear:number){
        super(id,name,inputSalary)
        this.inputSalary = inputSalary
        this.workYear = workYear
    }
    basicInfo():void{
        console.log(`ID : ${this.id},name : ${this.name}, salary : ${this.inputSalary}`)
    }
    report():void{
        console.log('report')
    }
    reportincome(){
        console.log('report income')
    }
}


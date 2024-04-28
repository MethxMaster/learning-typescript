"use strict";
class CompanyExam {
    static introduce() {
        console.log(`company : ${this.cName}`);
    }
}
CompanyExam.cName = 'EGAT';
CompanyExam.employeeList = [];
class patternData {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}
class EmployeeClass extends patternData {
    constructor(id, name, inputSalary, workYear) {
        super(id, name, inputSalary);
        this.inputSalary = inputSalary;
        this.workYear = workYear;
    }
    basicInfo() {
        console.log(`ID : ${this.id},name : ${this.name}, salary : ${this.inputSalary}`);
    }
    report() {
        console.log('report');
    }
    reportincome() {
        console.log('report income');
    }
}

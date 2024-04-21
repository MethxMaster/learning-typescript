//Aliases (Custom type) -------------------------------------------------------

//Declaration
type employeeData = {
    id : number,
    fname : string,
    salary : number,
    phone : string
}
let firstEmployee : employeeData = {
    id : 20000,
    fname : 'Meth',
    salary : 65000,
    phone : '02-461-0382'
}

console.log(`Aliases - ID : ${firstEmployee.id}, name : ${firstEmployee.fname}, salary : ${firstEmployee.salary} , phone : ${firstEmployee.phone}`)

let secondEmployee : employeeData = {
    id : 20001,
    fname : 'Non',
    salary : 500000,
    phone : '02-xxx-xxxx'
}

console.log(`Aliases - ID : ${secondEmployee.id}, name : ${secondEmployee.fname}, salary : ${secondEmployee.salary} , phone : ${secondEmployee.phone}`)


//Optional Properties ----------------------------------------------------------------------
/*let optionalAliases:employeeData = {
    id : 20001,
    fname : 'Non',
    salary : 500000
    // This will be warnned because the property names "phone" is missing to fix this we need to use "optional"
}*/
//EXAMPLE
type empDataMo = {
    id : number,
    fname : string,
    salary : number,
    phone ? : string
}
let emp1:empDataMo = {
    id : 20001,
    fname : 'Non',
    salary : 500000
}
console.log('Optional - ',emp1)


// Readonly Modifier ----------------------------------------------------------------------------------------
// readonly     ->  it cannot modify after assign value at declaration
type readonlyExam = {
    readonly id : number,
    fname : string,
    salary : number,
    phone : string
}
let emp_1:empDataMo = {
    id : 20001,
    fname : 'Non',
    salary : 50000,
    phone : '02-xxx-xxxx'
}
emp_1.phone = '02-461-xxxx'
//emp_1.id = '20002'  //it will be warnned because property names "id" was set to the readonly
console.log('Readonly - ',emp_1)    //But however we still able to run in the JS but as you know it is not an objective to use tsc
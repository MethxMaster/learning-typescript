
//Variable
console.log('######## Variable #################################')

const devName:string = 'developer01'

let fname:string = 'MethxMaster'
let age:number = 30
let age2 = 50   //this variable will be "number" automatically because it is declared by value (Do not need to declare type)
let single:boolean = false

console.log(`this boolean (default) = ${single}`)
//single = 'XXXX'
console.log('this boolean (assigned new value)= ',single,' -> This will warning in Typescript (becaose of variable type) but it is still can run in Javascript')

console.log(`this name will use to uppercase like a JS : ${fname.toLocaleUpperCase()}`)


//Any & Unknown -----------------------------------------------------------------------------------------------
console.log('######## Any & Unknown #################################')
/*
More explanations

"Any" will not validate and define type of variable. it is good to work for variable which has to change the value. but using this it is not good
"Unknown" will validate type of value but it will not define type

*/


function formatNumber(num:any){
    return num.toFixed(2)
}

let numAny1:any = '15'
numAny1 = 15
console.log(formatNumber(numAny1), ' This is able to run default declartion was string but second assigned was number then it is able to work in fx.')
/*
let numAny2:any = '10'
console.log(formatNumber(numAny2))  //This will not be warnned in Typescript but it will be an error in JavaScript
*/

function formatNumber2(num3:number){        
//num3:unknown -> Cannot use
//in this declaration variable we cannot use "unknown" becase the variable will be operating as a number so TypeScript will be prevent by warning
    num3.toFixed(2)
}

let numUnknown1:unknown = '15'
numUnknown1 = 15

//console.log(`Test unknown var : ${formatNumber2(numUnknown1)}`) //This warn becasue the unknown variable has validation
//So to fix the problem we need to do like this below.
if (typeof numUnknown1 === 'number' ){
    console.log(`Test unknown var : ${formatNumber2(numUnknown1)}`)
}
else {
    console.log("User input is not a number");
}







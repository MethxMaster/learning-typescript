//Narrowing ------------------------------------------------------


//1. type of guard

function truncate(value:string|number,length:number){
    if(typeof value === 'number'){
        return value.toString().slice(0,length)
    }
    else{
        return value.slice(0,length)
    }
}

console.log(truncate(12345,2))
console.log(truncate('string',2))

//2. Equality narrowing

function compareValue(x:string|number, y:string|number){
    if(x === y){
        return console.log('equal')
    }
    else{
        console.log('Not equal')
    }
}
compareValue(3,'3')
compareValue(4,4)

//3. Instand of narrowing

class User2{
    constructor(public username:string){}
}
class Employee2{
    constructor(public name:string){}
}

function printObj(obj:User2|Employee2){
    if(obj instanceof User2){
        console.log('The input is in the "User2"')
    }
    else{
        console.log('The input is in the "Employee2"')
    }
}
printObj(new User2('metheiei'))
printObj(new Employee2('jirameth'))


//4. Discriminated union
interface rectangle{
    width:number,
    height:number,
    type:'rectangle'
}
interface triangle{
    base:number,
    height:number,
    type:'triangle'
}
type shape = rectangle|triangle
function calculateArea(data:shape){
    switch(data.type){
        case 'rectangle' :
            return data.width*data.height
        case 'triangle' :
            return 0.5*data.base*data.height
        default :
            return new Error('Your input is not correct')
    }
}
console.log(calculateArea({width:2,height:4,type:'rectangle'}))
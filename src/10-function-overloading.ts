// Function overloading -------------------------
// to use when you have multi-type of input
function sum(a:string,b:string):string
function sum(a:number,b:number):number
function sum(a:unknown,b:unknown):unknown{
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return (parseInt(a)+parseInt(b)).toString();
    }
}

console.log(typeof sum(10,20),' : ',sum(10,20))
console.log(typeof sum('10','20'),' : ',sum('10','20'))

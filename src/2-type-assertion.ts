
//Type Assertion ------------------------------------------------
let input:unknown;

input = 150;
console.log('input (default) : ',input);
console.log('input (type) : ',typeof input);

// 1. use 'as'
(input as number).toFixed(2);
console.log('input = ',input)

// 2 use '<>'
input = 'developer01';
(<string>input).toUpperCase()
console.log('input = ',input)

//More example
function comeOnAnyInput(anyInput:unknown){
    let output:unknown = anyInput === 'number'? anyInput : parseInt((<string>anyInput));
    console.log('come on any input : '+output)
}
let test2:unknown = 50
comeOnAnyInput(test2)

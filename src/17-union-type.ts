//union type -----------------------------------

let param1:number|string
param1 = 10
console.log(param1)
param1 = 'Meth'
console.log(param1)

// with type aliases -----------------------------

type point ={
    x:number;
    y:number
}
type position ={
    lat:number;
    long:number
}
let coordinate:point|position

coordinate={x:5,y:10}
console.log(coordinate)
coordinate={lat:20,long:30}
console.log(coordinate)

type message1 = string|string[]
let showMessage1:message1 = ['Hi','OK']
console.log(showMessage1)
showMessage1 = 'bye'
console.log(showMessage1)


// union type in function
function sayHi(person:string|string[]):void{
    if(typeof person === 'string'){
        console.log('Hi :',person)
    }
    else{
        person.forEach((e)=>{
            console.log(`Hi : ${e}`)
        })
    }
}
sayHi('Sor')
sayHi(['sor','max'])

//Literal type -------------------------------------------------
type gender = "male" | "female"
let example1:gender = "female"
//cannot assigned another value

function confirmDialog(answer:"yes"|"no"){
    console.log(`result : ${answer}`)
}
confirmDialog('yes')
//confirmDialog('cancel)  -- can not do this

// template literal type
type vertical =  "top" | "middle" | "bottom"
type horizontal = "left" | "center" | "right" 
type alignment = `${vertical}-${horizontal}`

function showExample10(input:alignment):void{
    console.log(input)
}
showExample10('top-center')

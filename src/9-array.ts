// Array -------------------------------------------------------------------------
// Declaration
let array1:number[]=[];                         //empty string
let array2:string[]=['Meth','Max','Sor']        //with value

//accesibilities
console.log(array2[0])
array2[0] = 'Jack'
console.log(array2[0])
array1.push(1)
console.log(array1.length)
array2.forEach((e)=>{
    console.log(e)
})

//Array with Aliases
type product = {
    pname:string,
    price:number,
    qty:number
}

let productStock:product[] = [];

productStock.push({pname:"book",price:259,qty:150})
productStock.push({pname:"pen",price:29,qty:1000})
productStock.push({pname:"pencil",price:15,qty:2000})

console.log(productStock)
productStock.forEach((e)=>console.log(e))
console.log(productStock[1].price)

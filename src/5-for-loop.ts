// Loop   (same as JS)


for(let count:number = 1; count<= 10; count++){
    console.log(count)
}

let user1:string[]=['m','s','o']

for(let item of user1){                 // variable in foor (counting, indexing) does't need to declare type
    console.log('for of : ',item)
}

user1.forEach((e)=>{
    console.log(`for each : ${e}`)
})
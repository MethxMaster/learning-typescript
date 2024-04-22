//Destructuring ------------------------------------------

//array
const array10:number[] = [1,2,3]

const [data1,data2,data3] = array10

console.log(array10)
console.log(data1)
console.log(data2)
console.log(data3)

//object
const obj10:{
    item11:string,
    item12:string,
    item13:string
} = {
    item11:'item1',
    item12:'item2',
    item13:'item3'
}

const {item11:data11,item12:data12,item13:data13} = obj10
console.log(obj10)
console.log(data11)
console.log(data12)
console.log(data13)
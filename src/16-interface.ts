//Interface ------------------------------------
interface Population{
    name:string,
    age:number,
    gender:string
}


let person:Population; person={
    name:'MethxMaster',
    age:25,
    gender:'male'

}
console.log(person.gender)


//readonly and optional --------------------------------------------
interface InterfaceExample2{
    // readonly -> after decalre value it will be able to change the value
    readonly data1:string,
    // optional -> it will declare the value or let it empty
    data2?:number,
    data3:boolean
}
let example2:InterfaceExample2 = {
    data1: 'data1',
    data3: true
}
console.log(example2)
example2.data2 = 25
console.log(example2)


//Method declaration ------------------------------------------------
interface Example3 {
    data1:string,
    data2:number,
    method1:()=>void;
}
let example3:Example3 = {
    data1:'data1',
    data2:30,
    method1(){
        console.log(`current time : ${new Date().toLocaleString()}`)
    }
}
example3.method1()

//extend interface ------------------------------------------------
interface Extend1{
    data1:string,
    data2:number
}
interface Extend2{
    data3:string,
    data4:number
}
interface ExampleExtend extends Extend1,Extend2{
    data5:string,
    data6:number,
    method1:()=>void;
}
let Example4:ExampleExtend = {
    data1: 'data from extend 1',
    data2: 0,
    data3: 'data from extend 2',
    data4: 10,
    data5: 'data from main interface',
    data6: 20,
    method1(){
        console.log(`hello from method : ${this.data1}`)
    }
}
Example4.method1()

// intersection type ------------------------------------------------
type Type1={
    data1:string,
    data2:number
}
type Type2={
    data3:string,
    data4:number
}
type MainType={
    data5:string,
    data6:number,
    method1:()=>string;
}
type InterSectionType = MainType & Type1 & Type2
let Example5:InterSectionType = {
    data1: 'data from extend 1',
    data2: 0,
    data3: 'data from extend 2',
    data4: 10,
    data5: 'data from main interface',
    data6: 20,
    method1(){
        return 'Hi from method (return)'
    }
}
let ex5_output:string = Example5.method1()
console.log(ex5_output)

//The different between TYPE and INTERFACE
// INTERFACE - is able to and more attribute
// TYPE - is able to add more attribute

interface custom1{
    data1:string,
}
interface custom1{
    data2:string,
    data3:number,
}
let example6:custom1 = {
    data1:'data 1',
    data2:'data 2',
    data3:100
}
console.log(example6)
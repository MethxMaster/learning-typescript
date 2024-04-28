//Generic -----------------------


//original way
/*
function getElementNumber(arr:number[],count:number){
    return arr.slice(arr.length-count)
}
function getElementString(arr:string[],count:number){
    return arr.slice(arr.length-count)
}
function getElementBoolean(arr:boolean[],count:number){
    return arr.slice(arr.length-count)
}
*/
const myNum:number[] = [10,20,30,40,50]
const myString:string[] = ['A','B','C','D','E']
const myBool:boolean[] = [true,false,true,false,false]

// console.log(getElementNumber(myNum,2))
// console.log(getElementString(myString,2))
// console.log(getElementBoolean(myBool,2))


//Gereric function
function getElement<T>(arr:T[],count:number){
    return arr.slice(arr.length-count)
}
console.log(getElement<number>(myNum,3))
console.log(getElement<string>(myString,3))
console.log(getElement<boolean>(myBool,3))

//Multi type
function merge<T,U>(param1:T,param2:U){
    console.log(`${typeof param1} - ${typeof param1}`)
}
merge<string,boolean>('Hi',false)
merge<boolean,boolean>(true,true)

function mergeData<T,U>(data1:T,data2:U){
    return {
        ...data1,
        ...data2
    }
}
console.log(mergeData([1,2,3,4],{name:'name',age:25}))
console.log(mergeData({ name: 'name', age: 25 },[1, 2, 3, 4]));
console.log(mergeData('Soratorn',[1, 2, 3, 4]));
console.log(mergeData(123,[1, 2, 3, 4]));
console.log(mergeData('324','Meth'));

//Generic constaints
function mergeData2<T extends object,U extends object>(data1:T,data2:U){
    return {
        ...data1,
        ...data2
    }
}
const testData1 = {name:'name1',surename:'surename1'}
const testData2 = [1,2,3,4]
console.log(mergeData2(testData1,testData2))

//Generic class
class Stack<T>{
    private items:T[]=[]
    pushElement(element:T){
        this.items.push(element)
    }
}
const stack = new Stack<string>()
stack.pushElement('Sor')
stack.pushElement('Max')
console.log(stack)


//default generic
class Stack2<T=string>{
    private items:T[]=[]
    pushElement(element:T){
        this.items.push(element)
    }
}
const stack2 = new Stack2<number>()
stack2.pushElement(100)
stack2.pushElement(200)
console.log(stack2)

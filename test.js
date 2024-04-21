

const test = {
    x : 1,
    y : 2
}

function sum(props){
    const {x,y} = props
    return x+y;
}

console.log(sum(test))



let a = [1,2,3,4,5]

function summ(...input){
    for(let x of input){
        console.log(x)
    }
}
summ(...a)
//Tuple ---------------------------------------------------------------

//Declaration
const tupleVar1:[string,number] = ['disconected',404]
console.log(tupleVar1[0])
console.log(tupleVar1[1])

//label -> not effect
const tupleVar2:[code:number,status:string] = [404,'disconected']

//Type
type httpCode = [number,string]
const disconectedVar:httpCode = [404,'disconnected']
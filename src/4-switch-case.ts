

//Switch case (same as JS)

let inputOrder:number;
let resultSystem:string;

inputOrder = 2;

switch(inputOrder){

    case 1 :
        resultSystem = 'How much money would you like to Deposit? :'
        break;
    case 2 :
        resultSystem = 'How much money would you like to Withdraw? :'
        break;
    default :
        resultSystem = 'You chose your service wrong. please try again.'
        break;

}
console.log(resultSystem)

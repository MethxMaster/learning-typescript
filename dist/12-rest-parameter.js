"use strict";
//Rest parameter
const total = (...numbers) => {
    return numbers.reduce((total, item) => {
        return total + item;
    }, 0);
};
console.log(total(100, 200));
console.log(total(100, 200, 300));
console.log(total(100, 200, 300, 400));
console.log(total(100, 200, 300, 400, 500));

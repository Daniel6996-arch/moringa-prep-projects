/* function displayResult(some){
    console.log(some);
}

function calculator(num1,num2){
let sum = num1 + num2;
return sum;
}
let result = calculator(5,5);
//console.log(result);
displayResult(result); */

// callBack
function displayResult(some){
    console.log(some);
}

function calculator(num1, num2, myCallBack){
let sum = num1 + num2;
myCallBack(sum);
}
console.log(calculator(5, 5, displayResult));

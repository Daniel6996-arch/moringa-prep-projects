/* //forEach
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(function (number){
    var result = number +=1;
    console.log(result)
}); */
//map()   returns a new array 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var result = numbers.map(function (number){
    return number +=1;

});
console.log(numbers)
console.log(result)

//does not creat an array and return undefined
/* var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var result = numbers.forEach(function (number){
    return number +=1;

});
console.log(numbers)
console.log(result) */
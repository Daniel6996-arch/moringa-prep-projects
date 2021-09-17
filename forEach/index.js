/* var groceries = ['1kg carrots', '1kg cucumbers', '0.5kg tomatoes', '1kg cabbage'];

groceries.forEach(function (grocery){
    var result = grocery;
   // console.log(result)
});

var ranks = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

ranks.forEach(function (rank){
    var cards = rank + ' of' + ' clubs';
    console.log(cards);
})
 */
var languages = ['HTML', 'CSS', 'JavaScript'];
for (var index=0; index <= languages.length -1; index += 1){
    console.log('I love ' + languages[index])
};

var total = 0;
var numbers = [1, 2, 3, 4, 5];
for(index = 0; index <= numbers.length -1; index ++){
    total += numbers[index]; 
    console.log(total)
};
var total = 0;
for (var currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
    //total = currentNumber
    total += currentNumber;
};
console.log("Total is: " + total);

var result = 0;
for (var currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
    //total = currentNumber
    // total += currentNumber;
    console.log(currentNumber);
};
console.log();


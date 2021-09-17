/*var burger = 'burger';

if((prompt('What would you like?')) == burger){
    console.log('Have your burger!')
}else{
    console.log('Choose something else')
}; */


//grades
var result = parseInt(prompt('Whats the score'));
if(result >= 80 && result <= 100){
    console.log('A')
}else if(result >= 60 && result <= 79){
    console.log('B');
}else if(result >= 40 && result <= 59){
    console.log('C');
}else if(result >= 20 && result <= 39){
    console.log('D');
}else{
    console.log('E');
}

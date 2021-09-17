/* //forEach
var numbers  = [1, 2, 3, 4, 5];
numbers.forEach(function (number){
    console.log('This is number ' + number + ' !')
});
// Addition 
var total = 0;
numbers.forEach(function (addition){
    total += addition;
});
console.log(total);



var languages = ['HTML', 'CSS', 'JavaScript']; //array literal
languages.forEach(function (language){
    console.log('I love ' + language + ' and ' + language);
});

var objArray = new Array(1, 2, 3);
function chgArray(arr) {
    arr[0] = "surprise!";
 };
 chgArray(objArray);
 chgArray(languages);

 console.log(objArray);
 console.log(languages); */

 var arrObject = new Array();

arrObject[0] = "cat"; // array now has one element
console.log(arrObject[0]); // prints cat

var mammals = new Array("cat","dog","human","whale","seal");
var animalString = "";
for (var i = 0; i < mammals. length; i++) {
   animalString += mammals[i] + " ";
}
console.log(animalString);

// Comments in JavaScript
console.log('Hello World');

// Declare a variable and always terminate a statement with semi-colon
let name1 = 'Prachi';
let age = 30;
console.log(name1);

//Javascript is camel case
let firstName, lastName;
console.log(firstName);

// constant is used as const
const interestRate = 7;

console.log(typeof interestRate);

// Objects , Arrays and Functions 
// Objects means JSON 
let personObject = {
name : 'Mosh',
age : 30

};

console.log(personObject['name']);

// Arrays - in Javascript we can store different types in arrays like List

let selectedColors = ["red","blue",3];
console.log(selectedColors);

//Functions - only statements have semicolon at the end
function greet(fname) {

    console.log("Hello"+' '+fname);
}
function square_root(number)
{   
    return number * number
}


greet('Prachi'); //argument - actual value for parameter

console.log(square_root(8))

// Operators 
let x = 4;
let y = 5;
let z = x + y;
console.log(z);

//Assignment operators - we can use the shorthand to work on these
x = x + 5;
x += 5;

console.log(x!=1);

//Equality Operators - == and ===
console.log('1'===1);// strictly typed equality operators
console.log('1'==1); //loosely typed

// ternary opeartor 
let points = 100;
let type = points > 100 ? 'gold' : 'silver'
console.log(type)

//Control flow - if else statements 
if (points < 100 || points === 100) {
console.log('silver');
}
else if (points>100){
    console.log('gold');
}
else
    console.log('Bingo');


//Switch and case 
let role = 'guest';

switch (role){
    case 'guest':
        console.log('Guest');
        break;

    case 'moderator':
        console.log('Moderator');
        break;

    default:
        console.log('Unknown')

}

//Loops
// For loops - variable local scope
for (let i = 0;i<5;i++){
    console.log("Hello World");
}

//While loop
let i = 0;
while(i<5)
{
    console.log('Hello World');
    i++;

}

//Do while - it aleast gets evaluated at once
let j = 9
do {
    console.log('Bye World');
    j++;

} while(j<5)

//For loop
let person = {
    name : 'Mosh',
    age : 30
}
for (let key in person) {
 console.log(key , person[key])
}

const colors = ['red','blue','green'];

for (let index in colors){
    console.log(index , colors[index])
}

// for of loop - similar to iterate the elements in the python for loop (only arrays and not objects)

for (let color of colors){
    console.log(color)
}

function max_two(number1,number2){
    return (number1>number2 ? number1 : number2)
}

console.log(max_two(10,12))

function fizzBuzz(input){
    if (input%3===0 && input%5===0)
            return 'FizzBuzz'
    else if (input%3===0)
        return 'Fizz'
    else if (input%5===0)
        return 'Buzz'
    // not a number data type then this condition
    else if (typeof input != 'number')
        return NaN
       

    
}

console.log(fizzBuzz('prachi'))

//Demerit points




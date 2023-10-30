function sayHello() {
    console.log("hello, world")
}
sayHello()

function greet(name,age,occupation) {
    console.log(`Hello,my name is ${name}, i am ${age} years old, i am a ${occupation}!`)
}
greet('Alice', 13,'Lawyer');

function add(a,b) {
    return a + b;
}
const result = add (3,5);
console.log(result)

const globalVar = "I am global";
const key = globalVar +' Hello';

function printLocalVar() {
    const localVar = 'I am local';
    console.log(localVar);
}
console.log(key);
printLocalVar();

const greet2 = function(name) {
    console.log(`Hello, ${name}`);
}
greet2('Alice');


function isEven(number) {
    return number % 2 === 0;
}
const check = isEven (8);
console.log(check);


function multiply(a,c){
    return a * c;
}
let answer = multiply(3,6);
console.log(answer);


function add(a,b) {
    let sum = a + b;
    return sum;
}
let addnumber = add(5,9);
console.log(addnumber)


// ARROW FUNCTION

const add2 = (a,b) => {
    return a + b;
};
console.log(add2(4,7));

let 


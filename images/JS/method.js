const greeting = "Hello,world";
const length = greeting.length;
console.log(length);

const text = "Javascript is amazing";
const slice = text.slice(0,10);
console.log(slice);

const text1 = "Javascript is powerful";
const subStrText = text1.substr(11,2);
console.log(subStrText);


const text2 = "Hello, world";
const replace = text2.replace("world", "there");
console.log(replace);


const message = "Hello World";
const UpperCaseMessage = message.toUpperCase();
console.log(UpperCaseMessage);




const message2 = "Hello World";
const LowerCaseMessage = message.toLowerCase();
console.log(LowerCaseMessage)

const firstName = 'John';
const lastName = 'Doe';
const fullName =firstName.concat(' ', lastName);
console.log(fullName)


const binaryNumber = '101010';
const decimalNumber = parseInt(binaryNumber,2);
console.log(decimalNumber)

const strNum = '18';
const num = Number(strNum);
console.log(num)





const calculator ={
    add(a,b) {
        return a+b;
    },
    subtract(a,b) {
        return a- b;
    },
    multiply(a,b) {
        return a*b;
    },
    divide (a,b) {
        if(b===0) {
            return 'Cannot be divided by zero'
        }
        return a/b;
       
    }
};
const result = calculator.add(5,3);
console.log(result)
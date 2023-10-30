const fruits =['apple','banana','orange'];
fruits.pop();
console.log(fruits);

const fruits1 =['banana','orange'];
fruits1.push('apple');
console.log(fruits1);

const fruits2 = ["apple", "banana", "orange"];
fruits2.shift()
console.log(fruits2);

const fruits3 = ["apple", "orange"];
fruits3.unshift('banana');

const firstNum = ['1','2'];
const secondNum = ['3','4'];
const newNum = firstNum.concat(secondNum);
console.log(newNum);

const numbers = [1, 2, 3, 4, 5];
numbers.splice(2,1);
console.log(numbers)

const sourceArray = [0, 1, 2, 3, 4, 5, 6];
const slicedSourceArray = sourceArray.slice(1,4);
console.log(slicedSourceArray);

// OBJECTS

const student={
    name: 'John',
    age: '20',
    grade: 'A'
}

const object = Object.keys(student);
console.log(object);

const car = {
    make: 'Toyota',
    model: '2021'
}

const obj = Object.values(car);
console.log(obj);

const book = {
    author: 'JohnDoe',
    pages: '200'
}
console.log(book.hasOwnProperty('title'));

const bankAccount ={
    balance: '2000',
    interestRate: '10%',

    withdraw(amount){
        bankAccount.balance= bankAccount.balance- amount

        if(amount > 0) {
            this.balance -= amount;
            console.log()
        }
    },
    deposit(amount){
       bankAccount.balance = bankAccount.balance + amount
    }

}
bankAccount.withdraw(500);
bankAccount.deposit(500);
console.log(bankAccount.balance);


let user ={
    username: 'yugeendukwe',
    password: '23dhtyujk',

    verifyPassword (userPassword){
        user.password = user.password === userPassword
        // THE ABOVE STATEMENT IS CORRECT
        // TO USE AN IF STATEMENT THE BELOW STATEMENT WITH IF IS REQUIRED
        if(userPassword === this.password) {
            return true;
        }else{
            return false;
        }
    },

}
user.verifyPassword('23dhtyujk');
console.log(user.password);

let circle = {
    radius: '5',
    diameter: '2',

    calculateCircumference() {
        return 2 * 3.14 * this.radius;
    },

    calculateArea () {
        return 3.14 * this.radius ** 2;
    },
    
};
console.log(circle.calculateCircumference());

let person = {
    name: 'Karis',
    age: '20',
    gender: 'female',

    greet() {
        console.log(`hello my name is ${person.name}`)
    }

}
person.greet();

const findLongestWord= ['grapes', 'dog', 'goat'];
const longest = find(findLongestWord);
console.log(longest)
 for(let i = 1; i>=16; i++); 
 if(findLongestWord >=7) {
console.log(findLongestWord)

 };



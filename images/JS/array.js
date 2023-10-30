let num = [1,2,3,4,5,6];
let num4 = num[5]
let lastNum = num[num.length -1]
console.log(lastNum)
console.log(num4)
let color = ['red','blue','yellow'];
let firstColor = color[2];
console.log(firstColor)
console.log(color[1])


let person = {
    name: 'Alice',
    age: 25,
    isstudent: true
}

let personName = person.name;
console.log(personName)

let fruits = ['mango','banana','apple']
let fruits3 = fruits[2];

let book ={
    title: "Ceo's secret lover",
    author: 'Chinua Achebe',
    year: 2003

};

let movie = {
    title: 'Double life',
    director: "John",
    year: 2009
};
let directorName = movie.director;
console.log(directorName)

const country = [
    {
        name: 'Nigeria',
        population: '200 milliom',
        capital: "Abuja"
    },

    {
        name: 'France',
        population: '200 million',
        capital: 'Paris'
    },

    {
        name: "Benin",
        population: '290 million',
        capital: 'Port Novo'
    }
];

let thirdCountryName = country[2].name;
console.log(thirdCountryName)
console.log("i live in " + country[1].name + " the capital of " + country[1].name + " is " + country[1].capital + "," + country[1].name + " has a population of " + country[1].population)


// ADDING AND MODIFYING ARRAYS

// ARRAY METHODS

//  const fruits1 = ['apple','banana','cherry'];
//  const removedFruits1 = fruits1.pop();
//  console.log(removedFruits1)

const fruits1 = ['apple','banana','cherry'];
fruits1.pop();
console.log(fruits1);

fruits1.push('mango','paw-paw');
console.log(fruits1);

fruits1.shift();
fruits1.shift();
console.log(fruits1);

fruits1.unshift('kiwi','grape');
console.log(fruits1);

fruits1.splice(2,1,'strawberry');
console.log(fruits1);

const fruits2 = ['apple','banana','cherry'];
const slicedFruits2 = fruits2.slice(1,3);
console.log(slicedFruits2);



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

const person1= {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}
const obj = Object.keys(person1);
console.log(obj);
const values= Object.values(person1)
console.log(values);


// ITERATION FILTER

const number = [1,2,3,4,5];
const evenNumbers = number.filter((numbers) => numbers %2 === 0) 
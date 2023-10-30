let word = "Javascript";
for(let characters of word) {
    console.log(characters)
};

 let numbers= [1,2,3,4,];
 let sum = 0;
for(const number of numbers) {
    sum += number
 }
 console.log(sum)

const fruits = ["apple", "banana", "cherry", "date", "elderberry"]
for(const printFruitIndices in fruits) {
    console.log(printFruitIndices)
}

let person ={
    name: 'Hkechi',
    age: '30',
    weight: '100 pounds'
}
for(const key in person) {
    console.log(key + " ", person[key])
};

const cars = ['Honda','Spider','Lexus'];
cars.forEach(function(vehciles) {
    console.log(vehciles)
});

const veggies = ["Carrot","Cucumber","Garden egg"];
veggies.forEach(function(fruits) {
    console.log(fruits.length)
});
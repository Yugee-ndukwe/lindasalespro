const numbers = [1, 2, 3, 4, 5];
const squaredNumber = numbers.map(function(number) {
  return number ** 2;
});
console.log(squaredNumber)

const words = ['fruits','veggies'];
const upperCase = words.map(function(word) {
   return word.toUpperCase();
});
console.log(upperCase);

let person = [
    {
    name: 'John',
    age: '10',
    class: 'Basic 5'
}
];
let objName = person.map(function(surname) {
    return surname.name
});
console.log(objName)

const nums = [1, 2, 3, 4, 5,6,7,8,9];
const evenNumbers = nums.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

let strings = ["beans","yam","garri","spaghetti"]
let foods = strings.filter(function(stringsLength) {
    return stringsLength.length > 5;
});
console.log(foods);
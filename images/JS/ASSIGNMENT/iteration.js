let countries = ['France','Canada','Australia'];
for(let states of countries) {
    console.log(states)
};

let words = ["Fruits","Veggies","Sweetner"];
for (const word of words ) {
    console.log(word)
};

const numbers = [1,2,3,4,5];
let product = 1
for(const num of numbers) {
     product = num * product
    
}
console.log(product);

let totalCost = 0;
function items(prices){
    for(let total of prices) {
      totalCost = totalCost + total
    }
    return totalCost
}

console.log(items([50,100,200]));

let person = {
        name: "Derick",
        age: "30",
        occupation: "Student"
    }
for( let printPersonInfo in person ) {
    console.log(printPersonInfo + " ", person[printPersonInfo])
};

let car = {
    make: "Camry",
    model: "Toyota",
    year: "2021"

}
for(let key in car) {
    console.log(key + car[key])
};

const books = [
    { title: 'things for apart'},
    { author: "Chinua Achebe"}
]
books.forEach((element)=>{
    console.log(element)
});

let number = [1,2,3,4,5,6]
number.forEach((nums)=>{
    console.log(nums **2) 
})

  
      
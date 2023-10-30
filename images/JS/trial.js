// 
// 
// 
let age = 18;
age <= 15 ? console.log('sure you can vote') : console.log('you cant vote');


const password = "236dogpoo"
if(password.length  >= 8) {
console.log("password is strong")
}else{
    console.log("password is weak")
}

let standard = 7;
let daysHeld = 10;
let overdue = daysHeld - standard
let overDueDays = 2;
let lateFee;
const charge = 0.25;

if(daysHeld <= standard) {
    console.log('No late fee')
}else if(daysHeld >= standard) {
    daysHeld * charge
    console.log(daysHeld * charge)
}

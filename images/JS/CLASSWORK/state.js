let temparature =  98.6;
if(temparature >= 98.6) {
    console.log("You have a fever");
}else {
    console.log("You dont have a fever")
}

let accBalance = 1000;
if(accBalance < 1000) {
    console.log('You have sufficient funds');
}else {
    console.log("Insufficient funds")
}

let password = '8characters';
if(password.length >= 8) {
    console.log('Password is strong')
}else{
    console.log("Password is weak")
}

let studentScore = 75;
if(studentScore >= 90) {
    console.log('Excellent')
}else if(studentScore >= 75) {
    console.log('Good')
}else if(studentScore >= 60) {
    console.log('Average')
}else if(studentScore >=40) {
    console.log('Fail')
}else{
    console.log('Invalid')
}

let customersAccont = 100;
if(customersAccont <= 0){
    console.log('Negative balance-Contact customers support')
}else if(customersAccont >= 0) {
    console.log('Low balance-Consuder topping up')
}else if(customersAccont >= 100) {
    console.log('Your account balance is healthy')
}else{
    console,log('You need help')
}



let month = 12;
switch(month) {
    case "1":
        console.log('January')
        break;

        case '2':
            console.log('February')
            break;

            case '3':
                console.log('March')
                break;

                case '12':
                    console.log('December')
                    break;

                    default:
                        console.log("Not a month")
}
let num =  5;
let clothSize;
switch(num) {
    case 1:
    clothSize = "Large"
    break;
    case 2:
        clothSize = 'Medium'
    break;
        case 3:
            clothSize = 'Small'
            break;
     default:
        console.log('invalid')
}
console.log('The recommended clothing size '+ clothSize)



let purchase = 50;
let discount = 20/100 * 50;
let finalPrice = purchase - discount
if(purchase <= 50) {
    console.log(purchase - discount)
}else {
    console.log("No discount applied")
}
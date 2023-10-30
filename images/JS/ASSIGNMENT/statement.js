let age = '5 years';
if(age < 5) {
    console.log('You are a toddler')
}else{
    console.log('You are not a toddler')
}

let usersAge = 65;
if(usersAge > 65) {
    console.log("You are a senior citizen")
}else{
    console.log("You are not a senior citizen")
}

let accBalance = 50;
if(accBalance < 50) {
    console.log('Low balance alert');
}else {
    console.log("Your account is sufficient")
}

let season = 4;
switch(season) {
    case '1':
        console.log('Spring')
        break;

        case '2':
            console.log('Summer')
            break;

            case '3':
                console.log('Autunm')
                break;
                
                case '4':
                    console.log('Winter')
                    break;
                    
                    default:
                        console.log('Not a season')
}

let ageBracket = 65;
if(ageBracket <=12) {
    console.log('Child')
}else if(ageBracket >=13) {
    console.log('Teenager')
}else if(ageBracket >=20) {
    console.log('Adult')
}else if(ageBracket >=65) {
    console.log('Senior')
}else{
    console.log('Alien')
}

let temparature = 100;
if(temparature > 100) {
    console.log("Dangerpusly high temparature-seek medical attention")
}else if(temparature <= 100) {
    console.log("You have a mild fever")
}else if(temparature <= 98.6) {
    console.log("Your temparature is normal")
}else{
    console.log("You are not a human")
}
let age = 15;
if (age >= 18){
    console.log('you are eligble to vote')
} else{
    console.log('you are not eligble to vote')
}


let grade = 75;
if (grade >= 90){
    console.log('A')
} else if(grade >= 80){
    console.log('B')
} else if( grade >= 70){
    console.log('C')
} else {
    console.log('D')
}


let day = 'monday';
switch (day) {
    case 'wednesday':
    console.log('First day of the week');
    break;

    case 'Friday':
        console.log('Last day of the week');
        break;

        default: 
        console.log('normal day')
}
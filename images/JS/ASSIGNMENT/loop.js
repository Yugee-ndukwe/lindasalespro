for (let x=0; x < 5; x++) {
    console.log(x);
}

for (let y = 1; y < 3; y++) {
    console.log(y * 3);
}

for(let x = 3; x <=15; x++) {
    console.log(3*x);
}

let x = 1;
while(x <= 5) {
    console.log(x);
}

let sum =0;
let y = 1;
while(y <= 10) {
    sum += y;
    console.log(sum);
    y++;
}

let a = 2;
while(a <= 10) {
    console.log(a);
    a+=2;
}

let p = 1;
do{
    console.log(p);
    p++;
}while(p <= 10);

let t = 5;
do{
    console.log(t);
    t--;
} while(t <= 1);

let z = 1;
do{
    console.log(z*4),
    z++;
} while(z<=3);

for(let i = 1; i <= 10; i++) {
    if(1===3) {
        continue;
    } console.log(i);
}

for(let r=1; r <= 20; r++) {
    if(r >= 15) {
        break;
    } console.log(r);
};

for(let p = 1; p <=10; p++) {
    if(p===7) {
        continue;
    } console.log(3*p)
}
let amount = 50;
let videoGame = 45;
let book = 30;
let decision = (amount - videoGame)||(amount - book)
let lastOption;

if(amount >= videoGame) {
    console.log("Buy video game")
}else{
    console.log("Nuy the book!")
}

let ticketPrice = 10;
let snacksMoney = 20;
let movie = ticketPrice + snacksMoney;

if(movie < ticketPrice + snacksMoney) {
    console.log("Enjoy the movie")
}else{
    console.log("Stay home and save money")
}
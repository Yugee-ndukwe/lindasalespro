let temparature = [55,24,73];
let fahrenhit = temparature.map((celsuis)=>{
    return (celsuis * 9/5) + 32;
})
console.log(fahrenhit);

let students = [
    {
        name: 'Emma',
        score: 76
    },

   {
    name: "Ike",
    score: 82
   },
   
   {
    name: "Prince",
    score: 93
   } 

]
let newStudent = students.filter((highestSxore)=>{
    return highestSxore.score >= 90;
 }) 
 console.log(newStudent)
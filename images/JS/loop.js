for(let i = 0; i<=6; i++) {
    console.log(i);
}

for(let i =6; i>=0; i -= 2){
    console.log("number ", i)
}

let count = 1;
while(count < 5) {
    console.log("count:"+ count)
    count++
}

let num = 0;
do{
    console.log(num);
    num++;
}while(num < 5);

for(let x = 0; x < 10; x++) {
    if(x ===5) {
        break;
      } console.log(x)
    }
 
    for(let x = 0; x < 10; x++) {
        if(x ===3) {
            continue;
          } console.log("value" + x)
        }


        for(let y = 5; y >=1; y--) {
            console.log("num", y)
        }

        let sum = 0;
        for(let a = 1; a<=100; a++) {
             sum += a;
            }  console.log(sum)

            for( let a = 1; a<=5; a++) {
                console.log(3 * a);
            }

            let product = 2;
            let e = 1;
            while(e <= 5) {
                product *= e;
                e++;
            }
            console.log(product);

            for(let i = 1; i <=10; i++) {
                if(i===3 || i===7) {
                    continue;
                } console.log(i)
            }

            for(let i = 1; i <=20; i++) {
                if(i%5 ===0) {
                    break;
                } console.log(i)
            }  

            for(let i = 2; i <=20; i++) {
                if(i%2 !==0) {
                    continue;
                } console.log(i)
            } 
            
            
            // for(s = 4; s<= 40; s++) {
            //     if(s% 4 !=0);
            //     continue;
            // }
            // console.log(s)
            
            for(let y = 4; y <=40; y++) {
                if(y % 4 == 0)
                console.log(y)
            }
            
            
            // FOR...OF LOOP

            const fruits = ['aple','banana','cherry']
            for(const fruit of fruits) {
                console.log(fruit);
            }


            const person ={
                name: 'John',
                 age: '30',
                 city: 'New york'
            };
            for(const key in person) {
                console.log(key + '',person[key])
            }


            const numbers = [1,2.3,4,5];
            numbers.forEach(function(number) {
                console.log(number*2)
            });


            let names = ['messi','pele','maradona'];
            for (let i of names) {
                console.log(i)
            }

            let nums = [1,2,3]
               nums.forEach((element)=>{
                console.log(element * 3)
               }) 

               const friends = [
                {name:'Ngozi'},
                {name: 'Sandra'},
                {name: 'Linda'}
               ]
               friends.forEach((names)=>{
                console.log(names.name)
               })

               const states = ['Abia','Imo','Enugu','Anambra','Ebonyi']
               const updatedStates = states.map((element)=>{
                return element + "State"
               })
               console.log(updatedStates)

               const numb= [3,6,9,12]
               const dividedNum =numb.map((numbers)=>{
                return numbers /3
               })
               console.log(dividedNum);

               let numbs = [3,6,9,12]
               let evenNumbers = numbs.filter((number)=>{
                return number %2===0;
               })
               console.log(evenNumbers)
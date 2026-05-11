//For loop practice
 //1. for loop 
// syntax : 
// for (condition-to-start; condition-to-end; increment/decrement)
/*{
statement

}
    */
//print number 1 to 10

for(let i=1;i<=10;i++)
{
    console.log(i);
}

//Print Even Numbers from 1 to 20

for(let i =1; i<=20;i++){
    if(i%2== 0)
    {
     console.log(i);
    }
}

//Find Sum of Numbers from 1 to 100
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum);

//Reverse Counting from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Print Elements of an Array
let fruits: string[] = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Print Multiplication Table of 5
/*
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}*/

//for in loop. 

let user = {
    name: "Gurwinder",
    email: "gurwinder@gmail.com",
    role: "QA Tester"
};

for (let key in user) {
    console.log(key + ": " + user[key as keyof typeof user]);
     console.log(user.role);
}


// let x = prompt("Enter the Value");
// function fact(x) {
//   if (x == 0 || x == 1) {
//     return 1;
//   }

//   if (x < 0) {
//     return "Please Enter Positive Value";
//   }

//   return x * fact(x - 1);
// }
// console.log(fact(x));

// //Getting Error in this while looping
// //Error is undefined

// let y = Number(prompt("value"));

// function fact(y) {
//   if (y == 0 || y == 1) {
//     return 1;
//   }

//   if(y<0)
//   {return ("Please Enter Positive Value")}

//   for (let i=y; i > 0; i--) {
//     return (y * i);
//   }
// }

// console.log(fact(y));


//--------------------------------------------------------------

// let salary = Number(prompt("Enter Monthly Salary"));
// let workDays = Number(prompt("Enter Working Days"));

// function salcalc(salary){

//     let perDaySal = (salary/30);
//     let totalSalary = (perDaySal*workDays);

//     return totalSalary
// }

// console.log(salcalc(salary))

// -------------------------------------------------------

const user = {
firstName: prompt("Enter First Name"),
lastName: prompt("Enter Last Name"),
age :prompt("Enter Age"),
uClass : prompt("Enter Class Name"),
developer: confirm(" Developer of"),
friends : prompt("enter Friends list").split(" , "),
    address: {
        city:prompt("Enter City Name"),
        street: prompt(" Street Number"),
        house: prompt("House Number"),
}
};

console.log("My name is " + user.firstName + ". My Father Name is " + user.lastName + ". My age is " + user.age + ".\n"+ "My Class is " + user.uClass + ". I am a " +user.developer + " Developer. " + "My Friends are" + user.friends + "\n" + 
     "My Address is "+ user.address[city] + user.address[street] + user.address[house])


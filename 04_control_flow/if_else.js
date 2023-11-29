// if

// const isUserLoggedIn = true;
// const temperature = 41

// if (temperature === 34) {
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }

// <, >, <=. >=, ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("Test1"), console.log("Test2");
// Implicit scope -> Executed only on a single line. Use "," to write in multiple lines but it's unreadable that's why not recommended

// if(balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
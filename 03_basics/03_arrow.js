const user = {
    userName: "Sameer",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Hit"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Sameer"
//     console.log(this.username);
// }

//chai()

const chai = () => {
    let username = "Sameer"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // Implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // return object

console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()